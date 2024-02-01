import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";

const login = async (credentials: any) => {
  const body = JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  });
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth/authenticate`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  const data = await response.json();
  if (response.ok && data) {
    return data;
  }
  return false;
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const loginResponse = await login(credentials);
          return loginResponse;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
});
