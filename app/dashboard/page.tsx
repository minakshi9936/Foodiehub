'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUser } from '@/components/context/UserContext';
import { useCart } from '@/components/context/CartContext';

export default function Dashboard() {
  const { user, logout } = useUser();
  const { cart, clearCart, getTotal } = useCart();
  const router = useRouter();

  // If user not logged in, redirect to home
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const handleLogout = () => {
    logout(); // clear user from context
    clearCart(); // clear cart
    localStorage.removeItem('user'); // clear localStorage
    router.push('/'); // redirect to homepage
  };

  if (!user) return null; // Avoid flash

  return (
    <div className="min-h-screen pt-24 px-6 md:px-16 lg:px-32 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      {/* User Info */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 mb-8">
        <div className="flex items-center mb-4">
          <img src={user.avatar || '/avatar.png'} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Cart Info */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">No items in cart</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-100 p-2 rounded"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">{item.price} x {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">
                  ₹{Number(item.price.replace(/[^0-9]/g, '')) * item.quantity}
                </p>
              </div>
            ))}
            <div className="flex justify-end mt-4 font-bold text-lg">
              Total: ₹{getTotal()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

