'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const menuCategories = {
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
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-[#FF7A00] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category
                  ? 'bg-[#FF7A00] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-[#FF7A00] font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>

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
    </section>
  );
}
