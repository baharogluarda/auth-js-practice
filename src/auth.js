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
          // NextAuth errro handling: return null
          return null;
        }

        const payload = {
          user: { username: data.username, role: data.role },
          accessToken: data.token,
        };
        delete payload.user.token;
        console.log("payload:", payload);
        return payload;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user; // username + role
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      const { accessToken, user } = token;
      if (!accessToken || !user) return null;
      if (!getIsTokenValid(accessToken)) return null;

      if (Object.keys(user).length === 0) return null;

      session.user = user;
      session.accessToken = accessToken;
      console.log("session:", session);
      return session;
    },
  },
  pages: { signIn: "/" },
  trustHost: true,
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
