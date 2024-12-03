import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import { compare } from 'bcrypt';

export default {
  providers: [
    GitHub,
    CredentialsProvider({
      name: 'credetials',
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials.email) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });

        if (!user) return null;

        const passwordCorrect = await compare(credentials?.password as string, user?.password);

        if (passwordCorrect) {
          return {
            id: user.id,
            name: user.name,
          };
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
