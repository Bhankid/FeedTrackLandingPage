import React from 'react';
import { Utensils, CreditCard, Calendar, Shield, BarChart3, Bell, Users, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Features() {
  const features = [
    {
      icon: <CreditCard className="w-12 h-12 text-purple-400" />,
      title: "Advanced Payment System",
      description: "Handle prepayments and daily deductions with our automated system. Track balances in real-time and generate detailed payment reports."
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-400" />,
      title: "Flexible Scheduling",
      description: "Manage both regular and irregular eating patterns. Customize meal schedules and track attendance efficiently."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Verification System",
      description: "Ensure accurate attendance and payment tracking with our robust verification system. Prevent unauthorized access and maintain data integrity."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
      title: "Real-time Analytics",
      description: "Get instant insights into payment patterns, attendance trends, and financial reports. Make data-driven decisions with our comprehensive analytics."
    },
    {
      icon: <Bell className="w-12 h-12 text-purple-400" />,
      title: "Smart Notifications",
      description: "Receive instant alerts for low balances, missed payments, and important updates. Keep parents and administrators informed automatically."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Multi-user Access",
      description: "Grant specific permissions to different staff members. Manage roles and responsibilities effectively within the system."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-400" />,
      title: "Automated Scheduling",
      description: "Set up automatic payment deductions and meal schedules. Save time with our intelligent automation features."
    },
    {
      icon: <Utensils className="w-12 h-12 text-purple-400" />,
      title: "Credit Management",
      description: "Efficiently handle delayed payments and credit requests. Track and manage payment histories with ease."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover all the powerful features that make FeedTrack the perfect solution for your school's meal management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="bg-purple-900/50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}