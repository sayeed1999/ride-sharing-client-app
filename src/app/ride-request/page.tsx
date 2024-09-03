import { withCustomerGuard } from "../guards/withCustomerGuard";

const RideRequestPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center">Request a Ride</h2>
      <form className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Pickup Location</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dropoff Location</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Request Ride
        </button>
      </form>
    </div>
  );
};

export default withCustomerGuard(RideRequestPage);
