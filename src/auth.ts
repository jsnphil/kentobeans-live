import NextAuth from 'next-auth';
import Twitch from 'next-auth/providers/twitch';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Twitch({
      clientId: process.env.AUTH_TWITCH_ID || '',
      clientSecret: process.env.AUTH_TWITCH_SECRET || ''
    })
  ],
  callbacks: {
    authorized({ auth }) {
      // Return true if the user has a session, false redirects to sign-in
      return !!auth?.user;
    }
    // TODO - add custom claims to the token/session if needed for streamer-specific features (e.g. isStreamer)
  }
});
