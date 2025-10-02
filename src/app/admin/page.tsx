import { auth } from '@/app/auth';
import { headers } from 'next/headers';
import { getGuestbookEntries } from '../../app/db/queries';
import { redirect } from 'next/navigation';
import Form from './form';

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.email !== 'andrew@ableandrew.com') {
    redirect('/');
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
