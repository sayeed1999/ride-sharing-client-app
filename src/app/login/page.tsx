"use client";

import { useState } from "react";
import { withPublicGuard } from "../guards/withPublicGuard";
import { useAuth } from "../hooks/AuthProvider";
import { LoginPayload } from "../models/login";

const LoginPage = () => {
  // @ts-expect-error
  const { login } = useAuth();
  const [input, setInput] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const handleSubmitEvent = (e: any): any => {
    e.preventDefault();
    const { email, password } = input;

    if (!email || !password) {
      return alert("please provide a valid input");
    }

    login({
      email,
      password,
    });
  };

  const handleInput = (e: any) => {
    if (!e.target) return;

    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmitEvent} className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@yahoo.com"
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div id="email" className="sr-only">
            Please enter a valid username. It must contain at least 6
            characters.
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="a very very very strong password"
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div id="password" className="sr-only">
            your password should be more than 6 character
          </div>
        </div>
        <button className="btn-submit bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default withPublicGuard(LoginPage);
