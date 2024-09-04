"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

interface Props {
  children: any;
}

// Driver Guard - Accessible only by authenticated drivers!
export const DriverGuard = ({ children }: Props) => {
  const { isLoggedIn, hasRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn() || !hasRole("driver")) {
      router.push("/driver-login");
    }
  }, [router, isLoggedIn, hasRole]);

  return isLoggedIn() && hasRole("driver") ? <>{children}</> : null;
};
