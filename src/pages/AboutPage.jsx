import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, TrendingUp, MapPin } from "lucide-react";

const milestones = [
  { year: "2013", title: "Founded", desc: "Ashwin was founded in Gurugram with a mission to simplify phone reselling in India." },
  { year: "2016", title: "Series A Funding", desc: "Raised $5M in Series A to expand operations across top 10 Indian cities." },
  { year: "2018", title: "1 Million Customers", desc: "Crossed the 1 million happy customer mark. Expanded to 100+ cities." },
  { year: "2020", title: "Refurbished Store Launch", desc: "Launched our certified refurbished phone store — ReNew by Ashwin." },
  { year: "2022", title: "Series D & 5000 Cities", desc: "Raised $90M in Series D. Now serving 5000+ cities across India." },
  { year: "2024", title: "20L+ Customers", desc: "Serving 20 lakh+ customers with the highest buyback prices in India." },
];

const team = [
  { name: "Nakul Kumar", role: "Co-Founder & CEO", avatar: "NK", color: "bg-brand-500" },
  { name: "Mandeep Manocha", role: "Co-Founder & COO", avatar: "MM", color: "bg-blue-500" },
  { name: "Amit Sethi", role: "Co-Founder & CTO", avatar: "AS", color: "bg-green-500" },
  { name: "Priya Sharma", role: "VP Marketing", avatar: "PS", color: "bg-purple-500" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-brand-500/20 text-brand-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-5 font-body border border-brand-500/30">
            About Ashwin
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold font-display text-white leading-[1.1] mb-5">
            Simplifying Phone <br />
            <span className="text-gradient">Reselling in India</span>
          </h1>
          <p className="text-dark-300 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Since 2013, Ashwin has been India's most trusted platform for buying and selling smartphones. We believe everyone deserves a fair price — whether you're selling your old device or buying a quality refurbished one.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link to="/sell" className="btn-primary flex items-center gap-2">
              Start Selling <ArrowRight size={18} />
            </Link>
            <Link to="/buy" className="btn-secondary border-white/20 text-white hover:bg-white/10">
              Buy Refurbished
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-brand-500 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "20L+", l: "Happy Customers", icon: "😊" },
              { v: "₹500Cr+", l: "Paid to Sellers", icon: "💰" },
              { v: "5000+", l: "Cities Covered", icon: "🏙️" },
              { v: "10+", l: "Years of Trust", icon: "🏆" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl mb-1">{s.icon}</div>
                <p className="text-white font-display font-bold text-3xl">{s.v}</p>
                <p className="text-orange-100 font-body text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} className="text-brand-500" />,
                title: "Our Mission",
                desc: "To make phone reselling transparent, fair, and accessible to every Indian — from metros to tier-3 cities.",
                bg: "bg-orange-50",
                border: "border-orange-200",
              },
              {
                icon: <Eye size={28} className="text-blue-500" />,
                title: "Our Vision",
                desc: "A circular economy for electronics where every device gets a second life, reducing e-waste and making technology affordable.",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                icon: <Users size={28} className="text-green-500" />,
                title: "Our Values",
                desc: "Transparency, fairness, and customer-first. We never compromise on the trust our customers place in us.",
                bg: "bg-green-50",
                border: "border-green-200",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-2xl p-8`}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-dark-900 mb-3">{item.title}</h3>
                <p className="text-dark-500 font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-dark-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-sub">From a small startup to India's #1 phone reselling platform</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200"></div>

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} relative`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-brand-500 rounded-full -translate-x-1.5 md:-translate-x-2 mt-4 shadow-brand z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="card p-5 hover:-translate-y-0.5 transition-transform duration-300">
                      <span className="inline-block bg-brand-100 text-brand-600 font-bold text-sm px-3 py-1 rounded-full font-body mb-3">{m.year}</span>
                      <h3 className="font-bold font-display text-dark-900 text-lg mb-2">{m.title}</h3>
                      <p className="text-dark-500 text-sm font-body leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Leaders</h2>
            <p className="section-sub">The team behind India's most trusted phone reselling platform</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <h3 className="font-bold font-display text-dark-900 mb-1">{member.name}</h3>
                <p className="text-dark-400 text-sm font-body">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Best Startup 2020", org: "Economic Times", icon: "🏆" },
              { title: "Top 50 Disruptors", org: "CNBC-TV18", icon: "⭐" },
              { title: "Fastest Growing Brand", org: "Inc42", icon: "🚀" },
              { title: "Customer Choice 2024", org: "Google Play", icon: "🎖️" },
            ].map((a, i) => (
              <div key={i} className="card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-bold font-display text-dark-900 text-sm mb-1">{a.title}</h3>
                <p className="text-dark-400 text-xs font-body">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-brand-500 to-brand-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 font-body text-lg mb-8">Join 20 lakh+ Indians who trust Ashwin for their phone needs.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/sell" className="bg-white text-brand-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors font-body flex items-center gap-2">
              Sell Your Phone <ArrowRight size={18} />
            </Link>
            <Link to="/buy" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors font-body">
              Buy Refurbished
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
