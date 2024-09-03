"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

interface Props {
  children: any;
}

// Customer Guard - Accessible only by authenticated customers
export const CustomerGuard = ({ children }: Props) => {
  const { isLoggedIn, hasRole } = useAuth();
  const router = useRouter();

  if (!isLoggedIn() || !hasRole("customer")) {
    router.push("/customer-login");
    return null;
  }

  return <>{children}</>;
};
