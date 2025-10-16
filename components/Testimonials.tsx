'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Absolutely amazing experience! The food was exceptional and the ambiance was perfect. Will definitely be returning soon.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Executive',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Best restaurant in town! The staff is incredibly friendly and the dishes are crafted to perfection. Highly recommend the ribeye steak.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chef',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'As a chef myself, I can truly appreciate the attention to detail in every dish. FoodieHub sets the standard for culinary excellence.',
    rating: 5,
  },
  {
    name: 'Sofia Patel',
    role: 'Restaurant Owner',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The ambiance, service, and menu selection at FoodieHub are unmatched. Truly a five-star experience!',
    rating: 5,
  },
  {
    name: 'Liam Johnson',
    role: 'Culinary Student',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Learning from FoodieHub’s approach has been inspiring. Their creativity in the kitchen is next level!',
    rating: 4.7,
  },
  {
    name: 'Ava Thompson',
    role: 'Food Enthusiast',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Every visit is a delight. The flavors, presentation, and service make me come back again and again.',
    rating: 5,
  },
  {
    name: 'Noah Smith',
    role: 'Travel Blogger',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'FoodieHub is a must-visit for anyone exploring the city. Culinary delights at their finest!',
    rating: 4.9,
  },
  {
    name: 'Isabella Garcia',
    role: 'Nutritionist',
    image: 'https://images.pexels.com/photos/3771837/pexels-photo-3771837.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The menu is well-balanced and thoughtfully curated. A great place for both taste and health-conscious choices.',
    rating: 4.8,
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth / 3; // scroll one card at a time
        if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-[#FF7A00] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-full md:w-80 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

