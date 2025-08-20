'use client';

import { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, FileText, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  position: string;
  experience: string;
  medicalConditions: string;
  agreement: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  address: '',
  emergencyContact: '',
  emergencyPhone: '',
  position: '',
  experience: '',
  medicalConditions: '',
  agreement: false
};

const positions = [
  'Setter',
  'Outside Hitter',
  'Middle Blocker',
  'Opposite Hitter',
  'Libero',
  'Defensive Specialist'
];

const experienceLevels = [
  'Beginner (0-1 years)',
  'Intermediate (2-4 years)',
  'Advanced (5+ years)',
  'Professional'
];

export default function PlayerRegistrationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    if (!formData.position) newErrors.position = 'Position preference is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the terms' as any;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center animate-scale-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in joining Karonga Spikers! We'll review your application and contact you within 3-5 business days.
        </p>
        <button
          onClick={resetForm}
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up">
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8">
        <h2 className="text-3xl font-bold mb-2">Join Karonga Spikers</h2>
        <p className="text-primary-100">Fill out the form below to register as a new player</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <User className="w-5 h-5 mr-2 text-primary-600" />
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+265 xxx xxx xxx"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-primary-600" />
            Emergency Contact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Full name of emergency contact"
              />
              {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>}
            </div>

            <div>
              <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Contact Phone *
              </label>
              <input
                type="tel"
                id="emergencyPhone"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+265 xxx xxx xxx"
              />
              {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
            </div>
          </div>
        </div>

        {/* Volleyball Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary-600" />
            Volleyball Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Position *
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.position ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a position</option>
                {positions.map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  errors.experience ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select experience level</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-2">
              Medical Conditions or Allergies
            </label>
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="Please list any medical conditions, allergies, or injuries we should be aware of..."
            />
          </div>
        </div>

        {/* Agreement */}
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="agreement" className="ml-3 text-sm text-gray-700">
              I agree to the terms and conditions, privacy policy, and understand that participation in volleyball activities involves inherent risks. I consent to emergency medical treatment if necessary. *
            </label>
          </div>
          {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </div>
            ) : (
              'Submit Registration'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}