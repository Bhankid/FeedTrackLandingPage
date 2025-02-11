import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, CreditCard, Calendar, Shield, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart School Meal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Management System
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Streamline your school's meal program with our advanced feeding
              fee management system. Track payments, manage credits, and ensure
              efficient meal service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Request Demo
              </Link>
              <Link
                to="/features"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full text-lg font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/Y9ttXzJw/R.jpg"
              alt="School cafeteria"
              className="rounded-2xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Powerful Features for Modern Schools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CreditCard className="w-8 h-8 text-purple-400" />,
                title: "Advanced Payment System",
                description:
                  "Handle prepayments and daily deductions automatically",
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Flexible Scheduling",
                description:
                  "Manage regular and irregular eating patterns effortlessly",
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Verification System",
                description: "Ensure accurate attendance and payment tracking",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
                title: "Real-time Analytics",
                description: "Monitor payments and meal service patterns",
              },
              {
                icon: <Utensils className="w-8 h-8 text-purple-400" />,
                title: "Credit Management",
                description: "Track and manage delayed payments efficiently",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="bg-purple-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your School's Meal Management?
          </h2>
          <Link
            to="/pricing"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
      <div className="hidden  md:block">
        <Footer />
      </div>
    </div>
  );
}