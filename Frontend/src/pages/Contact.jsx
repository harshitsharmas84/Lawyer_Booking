import { Phone, Mail, MapPin, User, ArrowRight } from 'lucide-react';

export default function LawyerContact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our legal professionals are committed to protecting your rights and
            providing clear, strategic legal guidance you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Contact Info */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-slate-300 mb-8">
              If you need legal advice, representation, or have general inquiries,
              please reach out to our law office. All consultations are handled
              with complete confidentiality.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200">
                <div className="p-2 bg-slate-700 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                +91 9876543210
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <div className="p-2 bg-slate-700 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                legal.support@Project.com
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <div className="p-2 bg-slate-700 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                Ghumarwin, District Bilaspur, Himachal Pradesh, India
              </li>
            </ul>
          </div>

          {/* Right Card - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Legal Assistance</h3>
            <p className="text-gray-600 mb-6">
              Submit your details and a member of our legal support team will
              contact you shortly to discuss your case.
            </p>

            <form className="space-y-5">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required 
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required 
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required 
                />
              </div>

              <div>
                <textarea 
                  placeholder="Briefly describe your legal issue" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
