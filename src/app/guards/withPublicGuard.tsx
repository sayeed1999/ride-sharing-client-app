// TODO:- guards are crashing, not working

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

// Public Guard - Accessible by all users, redirects authenticated users
export const withPublicGuard = (WrappedComponent: any) => {
  return (props: any) => {
    // @ts-expect-error
    const { isLoggedIn, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn()) {
        router.push("/");
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };
};
