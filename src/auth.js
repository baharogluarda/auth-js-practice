import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) return null;

        const payload = {
          user: { username: data.username, role: data.role },
          accessToken: data.token,
        };

        return payload;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (!getIsTokenValid(token?.accessToken)) return null;
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: { signIn: "/login" },
});
