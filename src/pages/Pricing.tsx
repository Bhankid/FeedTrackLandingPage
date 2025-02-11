import React from "react";
import { Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "GH₵149",
      period: "per month",
      description: "Perfect for small schools",
      features: [
        "Up to 200 students",
        "Basic payment tracking",
        "Daily attendance records",
        "Email support",
        "Basic reporting",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "GH₵199",
      period: "per month",
      description: "Ideal for growing institutions",
      features: [
        "Up to 500 students",
        "Advanced payment tracking",
        "Credit management",
        "Priority support",
        "Advanced analytics",
        "Custom reports",
        "Multiple payment methods",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "GH₵299",
      period: "per month",
      description: "For large educational institutions",
      features: [
        "Unlimited students",
        "Full feature access",
        "24/7 priority support",
        "Custom integration",
        "Advanced security",
        "API access",
        "Dedicated account manager",
        "Custom branding",
      ],
      highlighted: false,
    },
  ];

  const navigate = useNavigate();

  // Handle navigation to the payment page
  interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted: boolean;
  }

const handleGetStarted = (plan: Plan): void => {
  navigate(
    `/PaymentPage?plan=${encodeURIComponent(
      plan.name
    )}&price=${encodeURIComponent(plan.price)}`
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Plan
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Select the perfect plan for your school's needs. All plans include
              our core features with different levels of support and capacity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-purple-600 to-purple-900 border-2 border-purple-400 transform scale-105"
                    : "bg-white/5 backdrop-blur-sm"
                } relative overflow-hidden transition-all hover:transform hover:scale-[1.02]`}
              >
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-purple-400 text-purple-900 text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="w-5 h-5 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-white text-purple-900 hover:bg-gray-100"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Need a custom plan? Contact our sales team for a tailored
              solution.
            </p>
            {/* Updated Button */}
            <Link to="/contact">
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Contact Sales →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
