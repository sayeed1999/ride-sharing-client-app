import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/AuthProvider";

// Customer Guard - Accessible only by authenticated customers
export const withCustomerGuard = (WrappedComponent: any) => {
  return (props: any) => {
    // @ts-expect-error
    const { isLoggedIn, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn() || !user || user.role !== "customer") {
        router.push("/login");
      }
    }, [user, router]);

    return user?.role === "customer" ? <WrappedComponent {...props} /> : null;
  };
};
