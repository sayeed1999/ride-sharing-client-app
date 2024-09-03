import { useAuth } from "../hooks/AuthProvider";

export default function Welcome() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="bg-blue-600 text-white py-20 flex items-center justify-center min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get a Ride in Minutes!</h2>
        <p className="text-lg">
          {isLoggedIn()
            ? "We have currently 10k+ drivers & customers actively looking for a trip!"
            : "Sign up as a driver or customer to get started."}
        </p>
      </div>
    </section>
  );
}
