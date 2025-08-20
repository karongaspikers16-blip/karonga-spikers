'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Users } from 'lucide-react';

export default function ContactEnhanced() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '', interest: 'general' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Ready to join our team or have questions? We're here to help you get started
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Karonga Stadium</p>
              <p className="text-gray-600">Karonga, Malawi</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+265 123 456 789</p>
              <p className="text-gray-600">+265 987 654 321</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@karongaspikers.com</p>
              <p className="text-gray-600">team@karongaspikers.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="join-team">Joining the Team</option>
                    <option value="coaching">Coaching Opportunities</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Visit Our Facility</h2>
              
              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-900 mx-auto mb-2" />
                      <p className="text-blue-900 font-semibold">Karonga Stadium Location</p>
                      <p className="text-gray-600 text-sm">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Training Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Age Groups</h4>
                    <p className="text-gray-600">Youth: 12-17 years</p>
                    <p className="text-gray-600">Adult: 18+ years</p>
                    <p className="text-gray-600">All skill levels welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  How do I join the team?
                </h3>
                <p className="text-gray-600">
                  Fill out our contact form with your details and we'll schedule a tryout session. All skill levels are welcome!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  What are the membership fees?
                </h3>
                <p className="text-gray-600">
                  We offer flexible membership plans starting from $20/month. Contact us for detailed pricing based on your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Do you offer beginner training?
                </h3>
                <p className="text-gray-600">
                  Yes! We have dedicated beginner programs with experienced coaches to help you learn the fundamentals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Can I book the facility for events?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer facility rental for tournaments, corporate events, and private parties. Contact us for availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
