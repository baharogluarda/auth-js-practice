import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

const config = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) {
          return {
            error: data.message || "Invalid credentials",
          };
        }

        const payload = {
          user: { username: data.username, role: data.role },
          accessToken: data.token,
        };
        delete payload.user.token;
        console.log("PAYLOAD:", payload);

        return payload;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const { accessToken, user } = token;
      if (!getIsTokenValid(accessToken)) return null;

      session.user = user;
      session.accessToken = accessToken;
      return session;
    },
  },
  pages: { signIn: "/login" },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
