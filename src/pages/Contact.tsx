import React, { useState } from "react";
import Swal from "sweetalert2";
import { Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Contact() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // WhatsApp number (replace with your actual WhatsApp number)
    const whatsappNumber = "233554572904"; // Example: +233 (55) 457-2904

    // Format the message
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Show success notification
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
    });

    // Reset form fields
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have questions about FeedTrack? Our team is here to help you get
              started.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Primary Phone Number */}
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-400">Primary Phone</p>
                    <p className="text-white">+233 (55) 123-4567</p>
                  </div>
                </div>
                {/* Secondary Phone Number */}
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-400">Secondary Phone</p>
                    <p className="text-white">+233 (24) 987-6543</p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white">
                      PMB CT 48
                      <br />
                      Achimota, Accra
                      <br />
                      Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Send us a Message Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                {/* Phone Field */}
                <div>
                  <label className="block text-gray-400 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    placeholder="+233 (XX) XXX-XXXX"
                    required
                  />
                </div>
                {/* Message Field */}
                <div>
                  <label className="block text-gray-400 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
