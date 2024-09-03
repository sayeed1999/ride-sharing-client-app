"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";
import React, { ReactNode } from "react";

interface Props {
  children: any;
}

// Public Guard - Accessible by all users, redirects authenticated users
export default function PublicGuard({ children }: Props): ReactNode {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (isLoggedIn()) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
}
