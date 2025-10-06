"use client";
import { oAuthProvider } from "@lib/constants/oauth-providers";
import { signIn, SignInOptions } from "next-auth/react";
import { ProviderId } from "next-auth/providers";
import React, { useCallback } from "react";
import Button from "./ui/button/Button";
import Image from "next/image";

interface ButtonOauthProps {
  provider: ProviderId;
  options?: SignInOptions;
}

const ButtonOAuth: React.FC<ButtonOauthProps> = ({ provider, options }) => {
  const handleOnClickButton = useCallback(() => {
    signIn(provider, options);
  }, [options, provider]);

  const selected = oAuthProvider[provider];
  if (!selected) return null;

  const imageAlt = provider
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <Button onClick={handleOnClickButton} className='w-full justify-start'>
      <Image
        src={selected.icon}
        alt={`${imageAlt} Icon`}
        height={24}
        width={24}
        className='size-6'
      />
      {selected.title}
    </Button>
  );
};

export default ButtonOAuth;
