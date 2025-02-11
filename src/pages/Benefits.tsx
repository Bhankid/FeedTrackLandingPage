import React from 'react';
import { TrendingUp, Clock, DollarSign, Shield, Users, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Benefits() {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Increased Efficiency",
      description: "Reduce administrative workload by up to 75% with automated payment tracking and attendance management."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-400" />,
      title: "Time Savings",
      description: "Save hours each day with automated processes and streamlined workflow management."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-400" />,
      title: "Better Financial Control",
      description: "Improve cash flow and reduce payment delays with our advanced tracking system."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Enhanced Security",
      description: "Ensure data protection and secure payment processing with our robust security measures."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Improved Parent Satisfaction",
      description: "Provide parents with real-time updates and convenient payment options."
    },
    {
      icon: <BarChart className="w-12 h-12 text-purple-400" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose FeedTrack?
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover how our system can transform your school's meal management process and deliver real value to your institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="bg-purple-900/50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Experience These Benefits?
            </h2>
            <a
              href="/pricing"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}