'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // new state for login modal
  const [isSuccess, setIsSuccess] = useState(false); // state for form submission success

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission success
    setIsSuccess(true);
    // Close modal after a delay
    setTimeout(() => {
      setIsLoginOpen(false);
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#FF7A00]">
                FoodieHub
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#FF7A00] transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-[#FF7A00] hover:bg-[#e66d00] text-white rounded-full px-6"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
              <p className="hover:bg-[#e66d00] hover:text-white text-black text-lg px-4 py-2 rounded-full transition-transform hover:scale-105">
                +91-6399997542
              </p>
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

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-[#FF7A00] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="w-full bg-[#FF7A00] hover:bg-[#e66d00] text-white rounded-full mt-4"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsLoginOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#FF7A00]">Login / Reserve</h2>
            {isSuccess && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                 submitted successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Gender</label>
                <select className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" required>
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <p className="text-center text-[#FF7A00]">
                "Serving Happiness on Every Plate." <br />
                ContactUs : +91-6399995241</p>
              <Button
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#e66d00] text-white rounded-full mt-2"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
