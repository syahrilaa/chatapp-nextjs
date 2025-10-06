import { ProviderId } from "next-auth/providers";

export interface OAuthProviderData {
  title: string;
  icon: string;
}

export const oAuthProvider: Partial<Record<ProviderId, OAuthProviderData>> = {
  google: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    title: "Continue with Google",
  },
};
