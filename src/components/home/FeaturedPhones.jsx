import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneCard from "../common/PhoneCard";
import { featuredPhones } from "../../data/data";

const FeaturedPhones = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Phones" },
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "under25k", label: "Under ₹25K" },
    { id: "premium", label: "Premium" },
  ];

  const filtered = featuredPhones.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "apple") return p.brand === "Apple";
    if (activeTab === "samsung") return p.brand === "Samsung";
    if (activeTab === "under25k") return p.buyPrice < 25000;
    if (activeTab === "premium") return p.buyPrice >= 50000;
    return true;
  });

  return (
    <section className="py-16 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-brand-500" />
              <span className="text-brand-500 font-semibold text-sm font-body uppercase tracking-wide">Refurbished Phones</span>
            </div>
            <h2 className="section-title">Shop Verified Phones</h2>
            <p className="section-sub">All phones are quality-checked & come with warranty</p>
          </div>
          <Link
            to="/buy"
            className="flex items-center gap-2 text-brand-600 font-semibold font-body hover:gap-3 transition-all duration-200"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-200
                ${activeTab === tab.id
                  ? "bg-brand-500 text-white shadow-brand"
                  : "bg-white border border-dark-200 text-dark-600 hover:border-brand-300 hover:text-brand-600"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-dark-400 font-body">
            <span className="text-4xl mb-4 block">📱</span>
            No phones in this category yet.
          </div>
        )}

        {/* CTA banner */}
        <div className="mt-10 bg-gradient-to-r from-brand-500 to-brand-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold font-display">Can't find what you're looking for?</h3>
            <p className="text-orange-100 mt-1 font-body">Browse our complete collection of 10,000+ refurbished phones</p>
          </div>
          <Link
            to="/buy"
            className="flex-shrink-0 bg-white text-brand-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors font-body flex items-center gap-2"
          >
            Explore All Phones <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhones;
