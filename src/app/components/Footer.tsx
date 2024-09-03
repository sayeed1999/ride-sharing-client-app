export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>
        &copy; {new Date().getUTCFullYear()} Ride Sharing Platform. All rights
        reserved.
      </p>
    </footer>
  );
}
