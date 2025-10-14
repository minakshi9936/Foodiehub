'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fullMenu = {
  Starters: [
    {
      name: 'Bruschetta',
      description: 'Toasted bread with fresh tomatoes, basil, and garlic',
      price: '$8.99',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Calamari Fritti',
      description: 'Crispy fried squid with lemon aioli',
      price: '$12.99',
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Spring Rolls',
      description: 'Crispy vegetable spring rolls with sweet chili sauce',
      price: '$7.99',
      image: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Garlic Bread',
      description: 'Warm bread with herb butter and parmesan',
      price: '$6.99',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Buffalo Wings',
      description: 'Spicy chicken wings with blue cheese dip',
      price: '$11.99',
      image: 'https://images.pexels.com/photos/2327943/pexels-photo-2327943.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with classic Caesar dressing',
      price: '$9.99',
      image: 'https://images.pexels.com/photos/2228842/pexels-photo-2228842.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  'Main Course': [
    {
      name: 'Grilled Salmon',
      description: 'Atlantic salmon with roasted vegetables and lemon butter',
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ribeye Steak',
      description: 'Premium ribeye with garlic mashed potatoes',
      price: '$32.99',
      image: 'https://images.pexels.com/photos/1321730/pexels-photo-1321730.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon, eggs, and parmesan',
      price: '$18.99',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Parmesan',
      description: 'Breaded chicken with marinara and mozzarella',
      price: '$19.99',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Seafood Paella',
      description: 'Spanish rice with shrimp, mussels, and calamari',
      price: '$26.99',
      image: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lamb Chops',
      description: 'Herb-crusted lamb with mint sauce',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Vegetable Stir Fry',
      description: 'Fresh vegetables in teriyaki sauce with rice',
      price: '$16.99',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'BBQ Ribs',
      description: 'Tender pork ribs with BBQ sauce and coleslaw',
      price: '$22.99',
      image: 'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  Desserts: [
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone',
      price: '$8.99',
      image: 'https://images.pexels.com/photos/6044280/pexels-photo-6044280.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with vanilla ice cream',
      price: '$9.99',
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Crème Brûlée',
      description: 'Rich custard with caramelized sugar topping',
      price: '$7.99',
      image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Cheesecake',
      description: 'New York style cheesecake with berry compote',
      price: '$8.99',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Apple Pie',
      description: 'Homemade apple pie with cinnamon ice cream',
      price: '$7.99',
      image: 'https://images.pexels.com/photos/5966716/pexels-photo-5966716.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Panna Cotta',
      description: 'Italian cream dessert with raspberry sauce',
      price: '$8.99',
      image: 'https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  Beverages: [
    {
      name: 'Fresh Lemonade',
      description: 'Homemade lemonade with mint',
      price: '$4.99',
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Espresso',
      description: 'Rich Italian espresso',
      price: '$3.99',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Berry Smoothie',
      description: 'Mixed berries with yogurt and honey',
      price: '$6.99',
      image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: '$4.99',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Iced Tea',
      description: 'Refreshing iced tea with lemon',
      price: '$3.99',
      image: 'https://images.pexels.com/photos/1251176/pexels-photo-1251176.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: '$5.99',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Milkshake',
      description: 'Chocolate, vanilla, or strawberry',
      price: '$6.99',
      image: 'https://images.pexels.com/photos/4791274/pexels-photo-4791274.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mojito (Non-Alcoholic)',
      description: 'Fresh mint, lime, and soda',
      price: '$5.99',
      image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      <div className="bg-[#FF7A00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Full Menu</h1>
          <p className="text-xl text-white/90">
            Explore our complete selection of delicious dishes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-0 bg-gray-50 py-4 z-40">
          {Object.keys(fullMenu).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#FF7A00] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeCategory}</h2>
          <div className="w-16 h-1 bg-[#FF7A00]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullMenu[activeCategory as keyof typeof fullMenu].map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#FF7A00] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {item.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <button
                  variant ="outline"
                  className="bg-[#FF7A00] hover:bg-[#e66d00] text-white text-lg px-4 py-4 mt-4 rounded-full transition-transform hover:scale-105">
                  add to cart
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-black text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-gray-400 mb-6">
            Visit us or make a reservation to enjoy these delicious dishes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-[#FF7A00] hover:bg-[#e66d00] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Book a Table
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
