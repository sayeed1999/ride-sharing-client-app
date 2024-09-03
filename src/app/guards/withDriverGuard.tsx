"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

interface Props {
  children: any;
}

// Driver Guard - Accessible only by authenticated drivers
export const DriverGuard = ({ children }: Props) => {
  const { isLoggedIn, hasRole } = useAuth();
  const router = useRouter();

  if (!isLoggedIn() || !hasRole("driver")) {
    router.push("/driver-login");
    return null;
  }

  return <>{children}</>;
};
