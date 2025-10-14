'use client';
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000); // hide after 4 seconds
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/09/18/84/02/360_F_918840281_VvmdwOojo3KOJdHVpg7Jb5NihBvKIh1b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-[#FF7A00] animate-pulse inline-block">
            Flavors
          </span>{" "}
          That Bring You Home.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
          Experience culinary excellence with every bite
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button 
            variant="outline"
            className="bg-[#FF7A00] hover:bg-[#e66d00] text-white text-lg px-8 py-6 rounded-full transition-transform hover:scale-105 animate-bounce">
              View Menu
            </Button>
          </Link>
          <Button
          variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF7A00] hover:bg-[#e66d00] text-white text-lg px-8 py-6  rounded-full transition-transform hover:scale-105 animate-bounce"
          >
            Book a Table
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#FF7A00]">Book a Table</h2>
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
                <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
                <input
                  type="number"
                  min={1}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
              <input
                type="date"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Preferred Time</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
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

      {/* Success Message */}
      {isSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce">
          Thank you for booking your table! See you soon!!
        </div>
      )}
    </section>
  );
}
