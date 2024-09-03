import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

// Public Guard - Accessible by all users, redirects authenticated users
export const withPublicGuard = (WrappedComponent: any) => {
  return (props: any) => {
    // @ts-expect-error
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push("/");
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };
};
