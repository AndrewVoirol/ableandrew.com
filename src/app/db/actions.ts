'use server';

import { auth } from '@/app/auth';
import { headers } from 'next/headers';
import { Pool } from 'pg';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function increment(slug: string) {
  noStore();
  await pool.query(
    'INSERT INTO views (slug, count) VALUES ($1, 1) ON CONFLICT (slug) DO UPDATE SET count = views.count + 1',
    [slug]
  );
}

async function getSession(): Promise<typeof auth.$Infer.Session> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  let session = await getSession();
  let email = session.user?.email as string;
  let created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  let entry = formData.get('entry')?.toString() || '';
  let body = entry.slice(0, 500);

  await pool.query(
    'INSERT INTO guestbook (email, body, created_by, created_at) VALUES ($1, $2, $3, NOW())',
    [email, body, created_by]
  );

  revalidatePath('/guestbook');

  let data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'guestbook@ableandrew.com',
      to: 'me@ableandrew.com',
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  let response = await data.json();
  console.log('Email sent', response);
}

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  let session = await getSession();
  let email = session.user?.email as string;

  if (email !== 'andrew@ableandrew.com') {
    throw new Error('Unauthorized');
  }

  const selectedEntriesAsNumbers = selectedEntries.map(Number);

  await pool.query(
    'DELETE FROM guestbook WHERE id = ANY($1::int[])',
    [selectedEntriesAsNumbers]
  );

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}