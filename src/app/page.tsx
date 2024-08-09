export default function HomePage() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h3 className="text-2xl font-bold">How It Works</h3>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold">Step 1</h4>
          <p>Sign up as a driver or customer.</p>
        </div>
        <div>
          <h4 className="font-semibold">Step 2</h4>
          <p>Request a ride or accept a ride.</p>
        </div>
        <div>
          <h4 className="font-semibold">Step 3</h4>
          <p>Enjoy your ride!</p>
        </div>
      </div>
    </div>
  );
}
