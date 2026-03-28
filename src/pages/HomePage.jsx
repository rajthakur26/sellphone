import Hero from "../components/home/Hero";
import BrandsSection from "../components/home/BrandsSection";
import FeaturedPhones from "../components/home/FeaturedPhones";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* Sell Banner */}
      <div className="bg-gradient-to-r from-dark-900 to-dark-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold font-display text-lg">🔥 Limited Time: Extra ₹2,000 on iPhone Sell-back</p>
                <p className="text-dark-400 text-sm font-body">Valid till 31st Dec 2024. Use code: CASHMORE</p>
              </div>
            </div>
            <Link
              to="/sell"
              className="flex-shrink-0 flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold font-body transition-colors text-sm"
            >
              Claim Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <BrandsSection />
      <HowItWorks />
      <FeaturedPhones />
      <WhyChooseUs />
      <Testimonials />

      {/* Trust section */}
      <div className="bg-brand-500 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Shield size={40} className="text-white opacity-80" />
              <div>
                <h3 className="text-white font-display font-bold text-2xl">100% Safe & Trusted</h3>
                <p className="text-orange-100 font-body text-sm mt-1">All transactions are secure and your data is protected</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {["ISO Certified", "PCI DSS Compliant", "RBI Registered"].map((badge) => (
                <div key={badge} className="text-center">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-orange-100 text-xs font-body">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
