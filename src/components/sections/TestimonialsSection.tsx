'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwale",
    role: "Team Captain",
    image: "/placeholder-avatar-1.jpg",
    content: "Karonga Spikers has transformed my life. The coaching is world-class, and the team environment is incredibly supportive. We've achieved so much together!",
    rating: 5
  },
  {
    id: 2,
    name: "James Banda",
    role: "Parent",
    image: "/placeholder-avatar-2.jpg",
    content: "My daughter joined the youth program last year, and the improvement in her confidence and skills has been remarkable. The coaches truly care about each player's development.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Chirwa",
    role: "Alumni Player",
    image: "/placeholder-avatar-3.jpg",
    content: "The discipline and teamwork I learned at Karonga Spikers helped me succeed not just in volleyball, but in my academic and professional life. Forever grateful!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our players, parents, and community members about their experiences with Karonga Spikers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
