import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      // Adiciona o ID do usuário ao token quando ele faz login
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Adiciona o ID do usuário à sessão
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  ...authConfig,
});
