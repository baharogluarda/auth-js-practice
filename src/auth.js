import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        // bu method dan donecek data userSession i olusturur
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) {
          return null; // login basarili degilse null dondurur
        }

        const payload = {
          user: { ...data },
          accessToken: data.token, // API'den gelen JWT
        };
        delete payload.user.token;

        return payload;
      },
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
