export default function Overview() {
    return (
      <section className="container mx-auto p-8">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 text-center">
            <h4 className="font-bold">Step 1</h4>
            <p>Sign up as a driver or customer.</p>
          </div>
          <div className="bg-gray-200 p-4 text-center">
            <h4 className="font-bold">Step 2</h4>
            <p>Request or accept rides.</p>
          </div>
          <div className="bg-gray-200 p-4 text-center">
            <h4 className="font-bold">Step 3</h4>
            <p>Enjoy your ride!</p>
          </div>
        </div>
      </section>
    );
  }
  