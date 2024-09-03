"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";
import React, { ReactNode, useEffect } from "react";

interface Props {
  children: any;
}

// Public Guard - Accessible by all users, redirects authenticated users
export default function PublicGuard({ children }: Props): ReactNode {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/");
    }
  }, [router, isLoggedIn]);

  return !isLoggedIn() ? <>{children}</> : null;
}
