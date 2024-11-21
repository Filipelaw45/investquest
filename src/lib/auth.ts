import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/account/signin',
  },
  ...authConfig,
});