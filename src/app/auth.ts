import { NextResponse } from "next/server";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const login = async (credentials: any) => {
  const body = JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  });
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth/authenticate`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    const data = await response.json();
    if (data.errorResponse) {
      throw new Error("Error al iniciar sesiónn");
    }
    return data;
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};

export const authConfig = {
  trustHost: true,
  trustHostedDomain: true,
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }: any) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
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
