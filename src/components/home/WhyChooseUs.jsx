import { ShieldCheck, Truck, Zap, CreditCard, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} className="text-brand-500" />,
    title: "Instant Price Quote",
    desc: "Get the best price for your phone in less than 60 seconds. No waiting, no negotiations.",
    bg: "bg-orange-50",
  },
  {
    icon: <Truck size={24} className="text-blue-500" />,
    title: "Free Doorstep Pickup",
    desc: "Our trained agents come to your home or office. Available in 5000+ cities across India.",
    bg: "bg-blue-50",
  },
  {
    icon: <CreditCard size={24} className="text-green-500" />,
    title: "Instant Payment",
    desc: "Get paid instantly via UPI, bank transfer, or cash. No delays, no cheques.",
    bg: "bg-green-50",
  },
  {
    icon: <ShieldCheck size={24} className="text-purple-500" />,
    title: "Safe & Secure",
    desc: "All transactions are encrypted and secure. Your data is always protected.",
    bg: "bg-purple-50",
  },
  {
    icon: <Award size={24} className="text-amber-500" />,
    title: "Best Price Guarantee",
    desc: "We offer the highest buyback price in India. Beat any offer and we'll match it.",
    bg: "bg-amber-50",
  },
  {
    icon: <HeadphonesIcon size={24} className="text-pink-500" />,
    title: "24/7 Customer Support",
    desc: "Our support team is always available to help you via call, chat, or email.",
    bg: "bg-pink-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-body">Why Ashwin?</span>
          <h2 className="section-title">India's Most Trusted Phone Reselling Platform</h2>
          <p className="section-sub max-w-2xl mx-auto">We've simplified the way you sell and buy phones. Here's what makes us different.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-dark-100 hover:border-brand-200 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-dark-900 font-display text-lg mb-2">{f.title}</h3>
              <p className="text-dark-500 font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "20L+", l: "Phones Sold" },
            { v: "₹500Cr+", l: "Paid to Customers" },
            { v: "5000+", l: "Cities Served" },
            { v: "4.8★", l: "Customer Rating" },
          ].map((s, i) => (
            <div key={i} className="text-center p-6 bg-brand-500 rounded-2xl">
              <p className="text-white font-display font-bold text-3xl">{s.v}</p>
              <p className="text-orange-100 font-body text-sm mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
