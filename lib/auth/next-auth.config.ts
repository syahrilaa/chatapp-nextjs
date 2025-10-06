import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

export const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};
