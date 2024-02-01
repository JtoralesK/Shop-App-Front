export const authConfig = {
  trustHost: true,
  trustHostedDomain: true,
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = auth ? auth.user : false;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      }
      if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      } else {
        return false;
      }
      return true;
    },
  },
};
