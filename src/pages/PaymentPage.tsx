import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js"; // Ensure correct Paystack import
import Navbar from "../components/Navbar";

const PaymentPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("Starter");
  const [amountState, setAmount] = useState<number>(149);
  const [paystackInstance, setPaystackInstance] = useState<PaystackPop | null>(
    null
  );

  // Available plans
  const plans = [
    { name: "Basic", amount: 149 },
    { name: "Professional", amount: 199 },
    { name: "Enterprise", amount: 299 },
  ];

  // Initialize Paystack instance
  useEffect(() => {
    const paystack = new PaystackPop();
    setPaystackInstance(paystack);
    
    console.log("Paystack Key:", import.meta.env.VITE_PAYSTACK_PUBLIC_KEY);
  }, []);

  // Handle plan selection
  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);
    const selected = plans.find((plan) => plan.name === selectedPlanName);
    setAmount(selected ? selected.amount : 0);
  };

  // Handle payment initiation
  const handlePayment = () => {
    if (!paystackInstance) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Payment module is still loading. Please wait...",
      });
      return;
    }

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Payment",
      text: `You are about to pay GHS ${amountState} for the ${selectedPlan} plan. Proceed?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#114CCBFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        initiatePaystackTransaction();
      }
    });
  };

  // Initiate Paystack transaction
  const initiatePaystackTransaction = () => {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    if (!publicKey) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Paystack public key is missing.",
      });
      return;
    }

    paystackInstance?.newTransaction({
      key: publicKey,
      email,
      amount: amountState * 100, 
      currency: "GHS",
      metadata: {
        custom_fields: [
          {
            display_name: "Plan",
            variable_name: "plan",
            value: selectedPlan,
          },
        ],
      },
      onSuccess: (response: { reference: string }) => {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: `Reference: ${response.reference}`,
        });
      },
      onCancel: () => {
        Swal.fire({
          icon: "warning",
          title: "Payment Canceled",
          text: "You closed the payment window.",
        });
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enter your email, select a plan, and proceed with payment.
            </p>
          </div>

          <form className="bg-white/5 backdrop-blur-lg rounded-xl p-8 space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                required
              />
            </div>

            {/* Plan Selection */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Select Plan
              </label>
              <select
                value={selectedPlan}
                onChange={handlePlanChange}
                className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
              >
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name} - GHS {plan.amount}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount Field (Auto-updated with selected plan) */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Amount (GHS)
              </label>
              <input
                type="number"
                value={amountState}
                className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                disabled
              />
            </div>

            {/* Pay Now Button */}
            <button
              type="button"
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
