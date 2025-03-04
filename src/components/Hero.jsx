"use client";

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// DonationForm Component
const DonationForm = ({ isFormVisible, setIsFormVisible }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    phone: '',
    transactionReference: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const donationAmounts = [10, 25, 50, 100];

  const BankDetails = {
    bankName: "Fidelity Bank GHANA",
    accountName: "YIB COMMUNITY LBG",
    accountNumber: "2400161654815",
    branch: "East Legon Branch"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!selectedAmount && !customAmount) {
      setError('Please select or enter a donation amount');
      return;
    }

    if (!formData.fullName || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const reference = `DON-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const emailParams = {
        to_name: formData.fullName,
        to_email: formData.email,
        amount: selectedAmount || customAmount,
        reference_number: reference,
        bank_name: BankDetails.bankName,
        account_name: BankDetails.accountName,
        account_number: BankDetails.accountNumber,
        branch: BankDetails.branch
      };

      await emailjs.send(
        'service_pv9uhxk',
        'template_qj2rezc',
        emailParams,
        'je6afNyIYkHm5ldTB'
      );

      setShowBankDetails(true);
    } catch (error) {
      setError('Failed to process donation. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTransactionConfirmation = async () => {
    if (!formData.transactionReference) {
      setError('Please enter the transaction reference');
      return;
    }

    try {
      setIsSubmitting(true);

      const thankYouParams = {
        to_name: formData.fullName,
        to_email: formData.email,
        amount: selectedAmount || customAmount,
        transaction_reference: formData.transactionReference
      };

      await emailjs.send(
        'service_pv9uhxk',
        'template_twf2f0r',
        thankYouParams,
        'je6afNyIYkHm5ldTB'
      );

      setShowSuccess(true);
      setTimeout(() => {
        setIsFormVisible(false);
        setShowSuccess(false);
        setFormData({ fullName: '', email: '', phone: '', transactionReference: '' });
        setSelectedAmount(null);
        setCustomAmount('');
        setShowBankDetails(false);
      }, 3000);

    } catch (error) {
      setError('Failed to confirm transaction. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="text-green-500 text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
        <p className="text-gray-600">Your donation has been confirmed. We'll send you a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg relative">
      <button
        type="button"
        onClick={() => setIsFormVisible(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
                 transition-colors duration-300 hover:rotate-90 transform"
        aria-label="Close donation form"
      >
        <FaTimes className="w-5 h-5" />
      </button>

      {showBankDetails ? (
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Bank Transfer Details
          </h3>
          
          <div className="bg-orange-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-orange-800">
              Please make your transfer using the details below. After making the transfer,
              submit your transaction reference to complete your donation.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {Object.entries(BankDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              value={formData.transactionReference}
              onChange={(e) => setFormData({...formData, transactionReference: e.target.value})}
              placeholder="Enter Transaction Reference"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
              required
            />

            <button
              onClick={handleTransactionConfirmation}
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/50"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Transaction'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Make a Donation
          </h3>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p>{error}</p>
            </div>
          )}

          <div className="mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                    ${selectedAmount === amount 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter custom amount"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              placeholder="Full Name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email Address"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
              required
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/50"
          >
            {isSubmitting ? 'Processing...' : 'Proceed with Donation'}
          </button>
        </form>
      )}
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-orange-300 transition-colors"
          aria-label="Close video"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        
        {/* Video container with responsive aspect ratio */}
        <div className="relative pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Our Story Video"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Hero Component
const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // YouTube video URL
  const youtubeUrl = "https://www.youtube.com/embed/rwmpsS2Nu-4";

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 py-16 md:py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/education.jpeg"
          alt="Community helping hands"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full bg-orange-500/20 mb-6">
              <span className="animate-pulse">❤️</span>
              <span>Make a Difference Today</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Give a Helping Hand to Those in Need
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Join our psychosocial community organization in creating a nurturing environment 
              where young people can thrive, grow, and build a better future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsFormVisible(true)}
                className={`
                  inline-flex items-center justify-center px-8 py-4 
                  bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                  rounded-full transition-all duration-300 transform 
                  hover:-translate-y-1 shadow-lg hover:shadow-orange-500/50
                  ${!isFormVisible ? 'scale-105' : 'scale-100'}
                `}
              >
                <span className="mr-2">💰</span>
                Donate Now
              </button>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <span className="mr-2">▶️</span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Donation Form */}
          <div 
            className={`
              w-full lg:w-5/12 transition-all duration-500
              ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}
          >
            <DonationForm isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoUrl={youtubeUrl}
      />
    </section>
  );
};

export default Hero;