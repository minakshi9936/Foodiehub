'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useCart } from '@/components/context/CartContext';

export default function CheckoutPage() {
  const { cart, increaseQty, decreaseQty, getTotal } = useCart();
  const [address, setAddress] = useState('');

  const handlePayNow = () => {
    if (!address) {
      alert('Please enter delivery address!');
      return;
    }
    alert('Payment Successful!');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 md:px-16 lg:px-32">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-lg mb-4">Your cart is empty!</p>
          <Link
            href="/menu"
            className="bg-[#FF7A00] hover:bg-[#e66d00] text-white px-6 py-3 rounded-full"
          >
            Add Items from Menu
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Cart Items */}
          {cart.map((item) => {
            const priceNumber = Number(item.price.replace(/[^0-9]/g, ''));
            return (
              <div
                key={item.name}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.name)}
                    className="bg-gray-200 px-3 py-1 rounded-full text-lg"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.name)}
                    className="bg-gray-200 px-3 py-1 rounded-full text-lg"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-bold ml-4">₹{priceNumber * item.quantity}</p>
              </div>
            );
          })}

          {/* Delivery Address */}
          <div className="bg-white p-4 rounded-lg shadow space-y-2">
            <label className="block font-medium text-gray-700">Delivery Address</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Total & Pay Now */}
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total: ₹{getTotal()}</h2>
            <button
              onClick={handlePayNow}
              className="bg-[#FF7A00] hover:bg-[#e66d00] text-white px-6 py-3 rounded-full"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
