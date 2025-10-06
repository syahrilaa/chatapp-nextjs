import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@lib/firebase/admin";
import { config } from "./next-auth.config";
import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...config,
  adapter: FirestoreAdapter(firestore),
  cookies: {
    sessionToken: {
      name: process.env.AUTH_COOKIE_NAME,
      options: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  session: { strategy: "jwt" },
  useSecureCookies: process.env.NODE_ENV === "production",
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
});
