import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    isBoarding: boolean;
  }
  interface Session {
    user: { isBoarding: string } & DefaultSession["user"];
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {}
}

export {};
