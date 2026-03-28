import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck, Zap, ChevronDown } from "lucide-react";
import { brands } from "../../data/data";

const Hero = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  const quickBrands = brands.slice(0, 6);
  const modelsByBrand = {
    Apple: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14", "iPhone 13"],
    Samsung: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy A54"],
    OnePlus: ["OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus Nord 3"],
    Xiaomi: ["Xiaomi 14 Pro", "Xiaomi 13T", "Redmi Note 13 Pro+"],
    Realme: ["Realme GT 5 Pro", "Realme 11 Pro+"],
    Google: ["Pixel 8 Pro", "Pixel 8", "Pixel 7a"],
  };

  return (
    <section className="relative overflow-hidden bg-mesh min-h-[85vh] flex items-center">
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 animate-slide-up">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-2 shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-dark-700 font-body">Trusted by 20L+ Indians</span>
            <span className="text-brand-500 font-bold text-sm">✓</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display text-dark-900 leading-[1.1]">
              Sell Your Phone{" "}
              <span className="text-gradient">Instantly</span>
              <br />
              Get <span className="text-gradient">Best Price</span>
            </h1>
            <p className="mt-4 text-lg text-dark-500 font-body leading-relaxed max-w-lg">
              India's #1 platform to sell your old phone. Get instant price, free doorstep pickup, and same-day payment.
            </p>
          </div>

          {/* Quick sell widget */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-dark-100 max-w-lg">
            <p className="text-sm font-semibold text-dark-500 mb-4 font-body uppercase tracking-wide">🚀 Get Instant Quote</p>

            <div className="space-y-3">
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={(e) => { setSelectedBrand(e.target.value); setSelectedModel(""); }}
                  className="input-field appearance-none pr-10 cursor-pointer"
                >
                  <option value="">Select Brand</option>
                  {brands.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
              </div>

              {selectedBrand && (
                <div className="relative animate-slide-up">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="input-field appearance-none pr-10 cursor-pointer"
                  >
                    <option value="">Select Model</option>
                    {(modelsByBrand[selectedBrand] || ["Select model"]).map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
                </div>
              )}

              <button
                onClick={() => navigate("/sell")}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base"
              >
                <Zap size={18} />
                Get Instant Price
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Brand pills */}
          <div>
            <p className="text-sm text-dark-400 mb-3 font-body">Popular brands:</p>
            <div className="flex flex-wrap gap-2">
              {quickBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => { setSelectedBrand(brand.name); navigate("/sell"); }}
                  className="flex items-center gap-1.5 bg-white border border-dark-200 hover:border-brand-400 hover:shadow-md px-3 py-2 rounded-xl text-sm font-medium font-body text-dark-700 hover:text-brand-600 transition-all duration-200"
                >
                  <span>{brand.logo}</span>
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { icon: <ShieldCheck size={16} className="text-green-500" />, label: "100% Safe & Secure" },
              { icon: <Truck size={16} className="text-blue-500" />, label: "Free Doorstep Pickup" },
              { icon: <Zap size={16} className="text-amber-500" />, label: "Instant Payment" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm text-dark-600 font-body">
                {t.icon}
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Hero visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Floating cards */}
          <div className="relative w-full max-w-md">
            {/* Central phone mockup */}
            <div className="relative mx-auto w-64 h-[480px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-950 rounded-[3rem] shadow-2xl">
                <div className="absolute inset-3 bg-dark-900 rounded-[2.5rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-dark-800 to-dark-950 flex flex-col">
                    {/* Screen top notch */}
                    <div className="flex justify-center pt-4">
                      <div className="w-24 h-6 bg-dark-950 rounded-full"></div>
                    </div>
                    {/* Screen content */}
                    <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-4xl mb-3">📱</div>
                      <p className="text-white font-display font-bold text-lg">iPhone 15 Pro</p>
                      <p className="text-dark-400 text-xs font-body mt-1">256GB · Like New</p>
                      <div className="mt-4 bg-brand-500 rounded-2xl px-6 py-3">
                        <p className="text-white text-xs font-body">You'll get</p>
                        <p className="text-white font-display font-bold text-2xl">₹72,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            <div className="absolute top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 w-44 border border-dark-100 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">₹</span>
                </div>
                <div>
                  <p className="text-xs text-dark-400 font-body">Paid Today</p>
                  <p className="font-bold text-dark-900 font-display">₹48,500</p>
                </div>
              </div>
            </div>

            <div className="absolute top-32 -right-10 bg-white rounded-2xl shadow-xl p-4 w-44 border border-dark-100 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Truck size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 font-body">Free Pickup</p>
                  <p className="font-bold text-dark-900 font-display text-sm">In 2 hours</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 -left-6 bg-white rounded-2xl shadow-xl p-4 w-44 border border-dark-100 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={18} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 font-body">Verified by</p>
                  <p className="font-bold text-dark-900 font-display text-sm">Ashwin Pro</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-0 bg-brand-500 rounded-2xl shadow-xl p-4 w-44 animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <p className="text-orange-100 text-xs font-body">20L+ Happy</p>
                  <p className="font-bold text-white font-display text-sm">Customers!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "20L+", l: "Happy Customers" },
              { v: "50L+", l: "Phones Sold" },
              { v: "5000+", l: "Cities Covered" },
              { v: "4.8★", l: "App Rating" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-brand-400 font-display font-bold text-xl">{s.v}</p>
                <p className="text-dark-400 text-xs font-body mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
