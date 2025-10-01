'use client';

import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export function SignOut() {
  return (
    <button
      className="text-xs text-gray-700 dark:text-gray-300 mt-2 mb-6"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-900 dark:text-gray-100 mb-8"
      onClick={() => signIn('github')}
    >
      <Image alt="GitHub logo" src="/github-logo.svg" width="20" height="20" />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}