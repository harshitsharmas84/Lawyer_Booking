import { useState } from "react";
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  "WHAT IS ONLINE LEGAL CONSULTATION?",
  "ARE YOUR ONLINE LAWYERS QUALIFIED?",
  "WHAT HAPPENS IF I DON'T GET A RESPONSE FROM A LAWYER?",
  "HOW DO I START ONLINE CONSULTATION WITH LAWYER?",
  "IS ONLINE LAWYER CONSULTATION SAFE AND SECURE?"
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Questions?</h2>
            <h3 className="text-xl text-slate-300 mb-4">We're here to help</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Check out our FAQs or talk to a live customer care specialist
              by phone, chat, or email.
            </p>

            <div className="flex gap-4">
              <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
              </button>
              <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
              </button>
              <button className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Right Section (FAQs) */}
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-slate-400">
                    This is a sample answer. You can replace it with your own
                    legal consultation details.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
