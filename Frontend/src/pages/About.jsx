import { Link } from "react-router-dom";
import { Scale, Users, Award, Target, Heart, Shield, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

const About = () => {
  const team = [
    { name: "Alexandra Chen", role: "CEO & Founder", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex", bio: "Former BigLaw partner with 15+ years experience" },
    { name: "Marcus Johnson", role: "CTO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus", bio: "Tech veteran from Google & Stripe" },
    { name: "Priya Sharma", role: "Head of Legal", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya", bio: "Harvard Law, specializes in legal tech" },
    { name: "David Kim", role: "Head of Operations", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david", bio: "Scaled 3 startups to Series B" },
  ];

  const values = [
    { icon: Shield, title: "Trust & Security", description: "Your data and communications are protected with bank-level encryption." },
    { icon: Heart, title: "Client First", description: "Every decision we make is guided by what's best for our users." },
    { icon: Target, title: "Excellence", description: "We partner only with the most qualified and vetted legal professionals." },
    { icon: Award, title: "Transparency", description: "Clear pricing, honest reviews, and no hidden surprises." },
  ];

  const milestones = [
    { year: "2020", title: "Founded", description: "Started with a mission to democratize legal services" },
    { year: "2021", title: "1,000 Lawyers", description: "Reached our first major milestone in lawyer partnerships" },
    { year: "2023", title: "Series A", description: "Raised $12M to expand nationwide" },
    { year: "2025", title: "500K+ Users", description: "Helping half a million people find legal help" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-blue-200 mb-6 border border-white/10">
              <Scale className="w-4 h-4" />
              <span>About LegalEase</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Making Legal Services <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Accessible to Everyone</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We believe everyone deserves access to quality legal representation. 
              Our platform connects you with verified, experienced lawyers who are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At LegalEase, we're on a mission to bridge the gap between people seeking legal help and qualified attorneys. 
                The traditional process of finding a lawyer is broken – it's confusing, time-consuming, and often intimidating.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We've built a platform that makes it simple to find, compare, and book appointments with lawyers who specialize 
                in exactly what you need. No more cold calls, no more guesswork.
              </p>
              <div className="space-y-3">
                {["Vetted & verified legal professionals", "Transparent pricing & reviews", "Secure communication channels", "24/7 booking availability"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
                <Quote className="w-12 h-12 text-white/30 mb-4" />
                <p className="text-xl font-medium mb-6 leading-relaxed">
                  "Justice should not be a privilege of the wealthy. We're democratizing access to legal expertise for everyone."
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex" alt="CEO" className="w-12 h-12 rounded-full border-2 border-white/30" />
                  <div>
                    <p className="font-semibold">Alexandra Chen</p>
                    <p className="text-blue-200 text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at LegalEase.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From a simple idea to a platform trusted by hundreds of thousands.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`lg:flex items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-gray-50 rounded-2xl p-6 inline-block ${idx % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A team of legal experts and tech innovators working to transform the industry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100" />
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Find Your Lawyer?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of satisfied clients who've found expert legal help through our platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lawyers" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 shadow-lg transition-all flex items-center justify-center gap-2">
              Browse Lawyers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
