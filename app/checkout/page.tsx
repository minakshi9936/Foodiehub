export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Checkout Page</h1>
      <p className="text-lg text-gray-700">Your cart items will be displayed here.</p>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">Proceed to Payment</button>
    </div>
  );
}
