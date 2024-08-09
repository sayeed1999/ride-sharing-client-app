import Link from 'next/link';

export default function CTAButtons() {
  return (
    <div className="text-center mt-6">
      <Link
        href="/driver-signup"
        className="bg-white text-blue-600 px-6 py-3 rounded-md mx-2 inline-block"
      >
        Sign Up as a Driver
      </Link>
      <Link
        href="/customer-signup"
        className="bg-white text-blue-600 px-6 py-3 rounded-md mx-2 inline-block"
      >
        Sign Up as a Customer
      </Link>
    </div>
  );
}
