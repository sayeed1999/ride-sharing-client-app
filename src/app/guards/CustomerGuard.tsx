"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

interface Props {
  children: any;
}

// Customer Guard - Accessible only by authenticated customers!
export const CustomerGuard = ({ children }: Props) => {
  const { isLoggedIn, hasRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn() || !hasRole("customer")) {
      router.push("/customer-login");
    }
  }, [router, isLoggedIn, hasRole]);

  return isLoggedIn() && hasRole("customer") ? <>{children}</> : null;
};
