import ButtonOAuth from "@components/ButtonOAuth";
import AuthLayout from "@components/layout/auth";
import React from "react";

const SignInPage = () => {
  return (
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.HeaderTitle>Signin to continue</AuthLayout.HeaderTitle>
        <AuthLayout.HeaderDescription>
          Log in to your account to start communicating with your friends and groups in real time.
        </AuthLayout.HeaderDescription>
      </AuthLayout.Header>
      <AuthLayout.Form>
        <AuthLayout.FormItem>
          <ButtonOAuth provider='google' />
        </AuthLayout.FormItem>
      </AuthLayout.Form>
    </AuthLayout>
  );
};

export default SignInPage;
