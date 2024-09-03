"use client";

import { useAuth } from "../hooks/AuthProvider";
import { LoginPayload } from "../models/login";
import PublicGuard from "../guards/withPublicGuard";
import Form from "../components/Form";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <PublicGuard>
      <Form
        formTitle="Login"
        submitBtnName="Login"
        dispatchAction={login}
        formItems={[
          {
            label: "Email",
            name: "email",
            value: "",
            type: "email",
            id: "email",
            placeholder: "example@yahoo.com",
            required: true,
            validationError: "Please enter a valid email.",
          },
          {
            label: "Email",
            name: "password",
            value: "",
            type: "password",
            id: "password",
            placeholder: "a very very very strong password",
            required: true,
            validationError: "Password is too easy. Try a strong one!",
          },
        ]}
      />
    </PublicGuard>
  );
};

export default LoginPage;
