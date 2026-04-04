'use server';
import { ACCEPT_RULES_COOKIE_NAME } from '@/utils/constants';
import { cookies } from 'next/headers';

export async function acceptSongRules() {
  const cookieStore = await cookies();
  cookieStore.set(ACCEPT_RULES_COOKIE_NAME, 'accepted', {
    path: '/',
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  });
}
