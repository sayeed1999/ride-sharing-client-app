import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ride Sharing Platform</h1>
        <nav>
          <Link
            href="/"
            className="mx-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/driver-signup"
            className="mx-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Driver Signup
          </Link>
          <Link
            href="/customer-signup"
            className="mx-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Customer Signup
          </Link>
          <Link
            href="/login"
            className="mx-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Login
          </Link>
          <Link
            href="/ride-request"
            className="mx-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Request a Ride
          </Link>
        </nav>
      </div>
    </header>
  );
}
