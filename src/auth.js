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
          // NextAuth hata durumu: null dön
          return null;
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
    authorized({ auth, request }) {
      // auth: { user, accessToken, ... }

      // 1) Kullanıcı login değilse → direkt RED
      if (!auth?.accessToken) return false;

      // 2) Token süresi geçmişse → RED
      if (!getIsTokenValid(auth.accessToken)) return false;

      // 3) İstenirse rol kontrolü
      const pathname = request.nextUrl.pathname;

      // Örnek: /admin için sadece admin rolü izinli olsun
      if (pathname.startsWith("/admin")) {
        return getIsUserAuthorized(auth.user.role, "admin");
      }

      // 4) Diğer tüm sayfalara giriş izni
      return true;
    },
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
