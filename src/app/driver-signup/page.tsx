import PublicGuard from "../guards/withPublicGuard";

const DriverSignupPage = () => {
  return (
    <PublicGuard>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center">Driver Signup</h2>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
            Sign Up
          </button>
        </form>
      </div>
    </PublicGuard>
  );
};

export default DriverSignupPage;
