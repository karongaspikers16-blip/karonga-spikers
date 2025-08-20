'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-200">Ready to join our team? Contact us today!</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <MapPin className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p>Karonga Stadium, Malawi</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Phone className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p>+265 123 456 789</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Mail className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p>info@karongaspikers.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
