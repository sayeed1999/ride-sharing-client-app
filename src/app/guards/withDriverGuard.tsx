import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

// Driver Guard - Accessible only by authenticated drivers
export const withDriverGuard = (WrappedComponent: any) => {
  return (props: any) => {
    // @ts-expect-error
    const { isLoggedIn, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn() || !user || user.role !== "driver") {
        router.push("/login");
      }
    }, [user, router]);

    return user?.role === "driver" ? <WrappedComponent {...props} /> : null;
  };
};
