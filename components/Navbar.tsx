'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/components/context/CartContext';
import { useUser } from '@/components/context/UserContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const { cart } = useCart();
  const { user, login, logout } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle login/signup and store user in localStorage
  const handleLogin = (name: string, email: string) => {
    const userData = { name, email, avatar: '/avatar.png' }; // default avatar
    login(userData.name, userData.email);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      login(parsedUser.name, parsedUser.email);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#FF7A00]">
                FoodieHub
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#FF7A00] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}

              {/* Cart Icon */}
              <Link href="/checkout" className="relative inline-flex items-center mr-4">
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-[#FF7A00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7H19m-12-7L5.4 5M16 16a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </Link>

              {!user ? (
                <Button
                  className="bg-[#FF7A00] hover:bg-[#e66d00] text-white rounded-full px-6"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </Button>
              ) : (
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 bg-[#FF7A00] text-white rounded-full hover:bg-[#e66d00]"
                >
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                  <span>{user.name}</span>
                </Link>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-[#FF7A00] transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsLoginOpen(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-4"
              id="loginEmail"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-4"
              id="loginPassword"
            />
            <div className="flex justify-between items-center">
              <Button
                onClick={() =>
                  handleLogin('John Doe', (document.getElementById('loginEmail') as HTMLInputElement).value)
                }
                className="bg-[#FF7A00] hover:bg-[#e66d00] text-white"
              >
                Login
              </Button>
              <p
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsLoginOpen(false);
                  setIsSignUpOpen(true);
                }}
              >
                Sign Up
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsSignUpOpen(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded mb-4"
              id="signUpName"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-4"
              id="signUpEmail"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-4"
              id="signUpPassword"
            />
            <div className="flex justify-between items-center">
              <Button
                onClick={() =>
                  handleLogin(
                    (document.getElementById('signUpName') as HTMLInputElement).value,
                    (document.getElementById('signUpEmail') as HTMLInputElement).value
                  )
                }
                className="bg-[#FF7A00] hover:bg-[#e66d00] text-white"
              >
                Sign Up
              </Button>
              <p
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsSignUpOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Login
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

