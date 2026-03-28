import { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle, ArrowRight, Zap, Truck, CreditCard, Shield } from "lucide-react";
import { brands } from "../data/data";

const modelsByBrand = {
  Apple: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13", "iPhone 12"],
  Samsung: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23", "Galaxy A54", "Galaxy A34", "Galaxy M54"],
  OnePlus: ["OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 11R", "OnePlus Nord 3", "OnePlus Nord CE 3"],
  Xiaomi: ["Xiaomi 14 Pro", "Xiaomi 13T Pro", "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi 12", "POCO X6 Pro"],
  Realme: ["Realme GT 5 Pro", "Realme GT Neo 5", "Realme 11 Pro+", "Realme Narzo 60 Pro"],
  Google: ["Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel 7 Pro"],
  Nothing: ["Nothing Phone 2a", "Nothing Phone 2", "Nothing Phone 1"],
  Motorola: ["Edge 40 Pro", "Edge 40", "Moto G84", "Moto G54"],
  Vivo: ["X100 Pro", "X90 Pro", "V29 Pro", "T2 Pro"],
  Oppo: ["Find X6 Pro", "Reno 11 Pro", "A78 5G"],
};

const conditions = [
  { id: "like_new", label: "Like New", desc: "No scratches, fully functional", multiplier: 1.0, emoji: "✨" },
  { id: "good", label: "Good", desc: "Minor scratches, all features working", multiplier: 0.85, emoji: "👍" },
  { id: "fair", label: "Fair", desc: "Visible scratches, fully functional", multiplier: 0.70, emoji: "😐" },
  { id: "acceptable", label: "Acceptable", desc: "Heavy wear, functional", multiplier: 0.55, emoji: "🔧" },
];

const basePrices = {
  "iPhone 15 Pro Max": 72000, "iPhone 15 Pro": 60000, "iPhone 15 Plus": 50000, "iPhone 15": 44000,
  "iPhone 14 Pro Max": 65000, "iPhone 14 Pro": 54000, "iPhone 14": 45000, "iPhone 13": 36000, "iPhone 12": 24000,
  "Galaxy S24 Ultra": 58000, "Galaxy S24+": 44000, "Galaxy S24": 38000, "Galaxy S23 Ultra": 48000,
  "Galaxy A54": 18000, "OnePlus 12": 38000, "OnePlus 11": 28000, "Xiaomi 14 Pro": 36000,
  "Pixel 8 Pro": 42000, "Pixel 8": 34000, "Nothing Phone 2a": 18000, "Nothing Phone 2": 24000,
};

const SellPage = () => {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [storage, setStorage] = useState("");
  const [accessories, setAccessories] = useState({ box: false, charger: false, earphones: false });
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const calculatePrice = () => {
    const base = basePrices[selectedModel] || 20000;
    const cond = conditions.find(c => c.id === selectedCondition);
    const multiplier = cond ? cond.multiplier : 0.7;
    const storageBonus = storage === "512GB" ? 5000 : storage === "256GB" ? 2000 : 0;
    const accessBonus = (accessories.box ? 1000 : 0) + (accessories.charger ? 500 : 0);
    const price = Math.round((base * multiplier) + storageBonus + accessBonus);
    setEstimatedPrice(price);
    setStep(4);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold font-display text-dark-900 mb-3">Booking Confirmed! 🎉</h2>
          <p className="text-dark-500 font-body mb-2">Our agent will contact you within 30 minutes.</p>
          <div className="bg-brand-50 rounded-2xl p-6 my-6">
            <p className="text-dark-500 font-body text-sm">Estimated Price</p>
            <p className="text-4xl font-bold font-display text-brand-600 mt-1">₹{estimatedPrice?.toLocaleString()}</p>
            <p className="text-dark-400 text-xs font-body mt-1">*Final price after device inspection</p>
          </div>
          <div className="space-y-3 text-sm text-left font-body">
            {[
              { label: "Device", value: `${selectedBrand} ${selectedModel}` },
              { label: "Condition", value: conditions.find(c => c.id === selectedCondition)?.label },
              { label: "Storage", value: storage },
            ].map(item => (
              <div key={item.label} className="flex justify-between">
                <span className="text-dark-400">{item.label}</span>
                <span className="font-semibold text-dark-700">{item.value}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setStep(1); setSubmitted(false); setSelectedBrand(""); setSelectedModel(""); setSelectedCondition(""); setEstimatedPrice(null); }}
            className="mt-8 btn-primary w-full"
          >
            Sell Another Phone
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-display text-white mb-3">Sell Your Phone</h1>
          <p className="text-orange-100 font-body text-lg">Get the best price. Instant pickup. Same-day payment.</p>
        </div>
      </div>

      {/* Progress steps */}
      <div className="bg-white border-b border-dark-100 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            {["Select Device", "Condition", "Accessories", "Price & Book"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold font-body transition-all
                  ${step === i + 1 ? "bg-brand-500 text-white" : step > i + 1 ? "bg-green-100 text-green-700" : "bg-dark-100 text-dark-400"}`}
                >
                  {step > i + 1 ? <CheckCircle size={14} /> : <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">{i + 1}</span>}
                  <span className="hidden md:block">{s}</span>
                </div>
                {i < 3 && <ChevronRight size={14} className="text-dark-300 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2 space-y-6">

            {/* Step 1: Select Device */}
            <div className={`card p-6 ${step >= 1 ? "" : "opacity-50 pointer-events-none"}`}>
              <h2 className="text-xl font-bold font-display text-dark-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Select Your Device
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-dark-700 font-body mb-2 block">Brand</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {brands.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => { setSelectedBrand(b.name); setSelectedModel(""); }}
                        className={`p-3 rounded-xl border-2 text-center transition-all duration-200
                          ${selectedBrand === b.name
                            ? "border-brand-500 bg-brand-50 shadow-brand"
                            : "border-dark-200 hover:border-brand-300"
                          }`}
                      >
                        <div className="text-xl">{b.logo}</div>
                        <p className="text-xs mt-1 font-body font-medium text-dark-700">{b.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedBrand && (
                  <div className="animate-slide-up">
                    <label className="text-sm font-semibold text-dark-700 font-body mb-2 block">Model</label>
                    <div className="relative">
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="input-field appearance-none pr-10"
                      >
                        <option value="">Select Model</option>
                        {(modelsByBrand[selectedBrand] || []).map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
                    </div>
                  </div>
                )}

                {selectedModel && (
                  <div className="animate-slide-up">
                    <label className="text-sm font-semibold text-dark-700 font-body mb-2 block">Storage</label>
                    <div className="flex flex-wrap gap-2">
                      {["64GB", "128GB", "256GB", "512GB", "1TB"].map(s => (
                        <button
                          key={s}
                          onClick={() => setStorage(s)}
                          className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold font-body transition-all
                            ${storage === s ? "border-brand-500 bg-brand-50 text-brand-600" : "border-dark-200 text-dark-600 hover:border-brand-300"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {storage && (
                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Step 2: Condition */}
            {step >= 2 && (
              <div className="card p-6 animate-slide-up">
                <h2 className="text-xl font-bold font-display text-dark-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                  Device Condition
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {conditions.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCondition(c.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200
                        ${selectedCondition === c.id
                          ? "border-brand-500 bg-brand-50"
                          : "border-dark-200 hover:border-brand-300"
                        }`}
                    >
                      <div className="text-2xl mb-2">{c.emoji}</div>
                      <p className="font-bold text-dark-800 font-body">{c.label}</p>
                      <p className="text-xs text-dark-400 font-body mt-1">{c.desc}</p>
                    </button>
                  ))}
                </div>
                {selectedCondition && (
                  <button onClick={() => setStep(3)} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
                    Continue <ArrowRight size={18} />
                  </button>
                )}
              </div>
            )}

            {/* Step 3: Accessories */}
            {step >= 3 && (
              <div className="card p-6 animate-slide-up">
                <h2 className="text-xl font-bold font-display text-dark-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                  Accessories Available?
                </h2>
                <div className="space-y-3">
                  {[
                    { key: "box", label: "Original Box", bonus: "+₹1,000", icon: "📦" },
                    { key: "charger", label: "Original Charger", bonus: "+₹500", icon: "🔌" },
                    { key: "earphones", label: "Original Earphones", bonus: "+₹0", icon: "🎧" },
                  ].map((acc) => (
                    <label key={acc.key} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                      ${accessories[acc.key] ? "border-brand-500 bg-brand-50" : "border-dark-200 hover:border-brand-200"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{acc.icon}</span>
                        <div>
                          <p className="font-semibold text-dark-800 font-body text-sm">{acc.label}</p>
                          <p className="text-xs text-green-600 font-body">{acc.bonus}</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={accessories[acc.key]}
                        onChange={(e) => setAccessories({ ...accessories, [acc.key]: e.target.checked })}
                        className="w-5 h-5 accent-brand-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
                <button onClick={calculatePrice} className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                  <Zap size={18} /> Get My Price
                </button>
              </div>
            )}

            {/* Step 4: Price & Booking */}
            {step >= 4 && estimatedPrice && (
              <div className="card p-6 animate-slide-up">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎉</span>
                  </div>
                  <h2 className="text-2xl font-bold font-display text-dark-900">Your Best Price</h2>
                  <div className="mt-4 bg-gradient-to-r from-brand-500 to-brand-700 rounded-2xl p-6">
                    <p className="text-orange-100 font-body text-sm">You'll get up to</p>
                    <p className="text-5xl font-bold font-display text-white mt-1">₹{estimatedPrice.toLocaleString()}</p>
                    <p className="text-orange-200 text-xs font-body mt-2">*Final price after inspection</p>
                  </div>
                </div>

                <h3 className="font-bold font-display text-dark-900 mb-4">Book Free Pickup</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="input-field"
                  />
                  <button
                    onClick={() => { if (name && phone && pincode) setSubmitted(true); }}
                    className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
                  >
                    <Truck size={18} /> Schedule Free Pickup
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Summary card */}
            {(selectedBrand || selectedModel) && (
              <div className="card p-5 sticky top-32">
                <h3 className="font-bold font-display text-dark-900 mb-4">Your Device</h3>
                <div className="space-y-2 text-sm font-body">
                  {selectedBrand && (
                    <div className="flex justify-between">
                      <span className="text-dark-400">Brand</span>
                      <span className="font-semibold text-dark-700">{selectedBrand}</span>
                    </div>
                  )}
                  {selectedModel && (
                    <div className="flex justify-between">
                      <span className="text-dark-400">Model</span>
                      <span className="font-semibold text-dark-700">{selectedModel}</span>
                    </div>
                  )}
                  {storage && (
                    <div className="flex justify-between">
                      <span className="text-dark-400">Storage</span>
                      <span className="font-semibold text-dark-700">{storage}</span>
                    </div>
                  )}
                  {selectedCondition && (
                    <div className="flex justify-between">
                      <span className="text-dark-400">Condition</span>
                      <span className="font-semibold text-dark-700 capitalize">{selectedCondition.replace("_", " ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="card p-5">
              <h3 className="font-bold font-display text-dark-900 mb-4">Why Sell with Us?</h3>
              <div className="space-y-3">
                {[
                  { icon: <Zap size={16} className="text-brand-500" />, text: "Best price guaranteed" },
                  { icon: <Truck size={16} className="text-blue-500" />, text: "Free doorstep pickup" },
                  { icon: <CreditCard size={16} className="text-green-500" />, text: "Instant payment" },
                  { icon: <Shield size={16} className="text-purple-500" />, text: "100% safe & secure" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-body">
                    {b.icon}
                    <span className="text-dark-600">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
