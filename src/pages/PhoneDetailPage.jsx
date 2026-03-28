import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, ShieldCheck, Truck, CreditCard, Star, ChevronRight, ArrowLeft, Zap, Check } from "lucide-react";
import { featuredPhones } from "../data/data";
import PhoneCard from "../components/common/PhoneCard";

const PhoneDetailPage = () => {
  const { id } = useParams();
  const phone = featuredPhones.find(p => p.id === parseInt(id)) || featuredPhones[0];
  const related = featuredPhones.filter(p => p.brand === phone.brand && p.id !== phone.id).slice(0, 4);

  const [wishlist, setWishlist] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [phone.image, phone.image, phone.image];

  const specs = [
    { label: "Brand", value: phone.brand },
    { label: "Model", value: phone.name },
    { label: "Storage", value: phone.storage },
    { label: "Color", value: phone.color },
    { label: "Condition", value: phone.condition },
    { label: "Warranty", value: phone.warranty },
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm font-body text-dark-500">
          <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/buy" className="hover:text-brand-500 transition-colors">Buy Phone</Link>
          <ChevronRight size={14} />
          <span className="text-dark-800 font-semibold">{phone.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/buy" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-brand-500 mb-6 font-body transition-colors">
          <ArrowLeft size={16} /> Back to listing
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="card overflow-hidden mb-3">
              <img
                src={images[selectedImg]}
                alt={phone.name}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/f97316/ffffff?text=${encodeURIComponent(phone.name)}`;
                }}
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`flex-1 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImg === i ? "border-brand-500" : "border-dark-200"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`badge text-xs mb-2 ${phone.badgeColor}`}>{phone.badge}</span>
                <h1 className="text-3xl font-bold font-display text-dark-900">{phone.name}</h1>
                <p className="text-dark-500 font-body mt-1">{phone.brand} · {phone.storage} · {phone.color}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className={`p-2.5 rounded-xl border transition-all ${wishlist ? "bg-red-50 border-red-200 text-red-500" : "border-dark-200 text-dark-500 hover:border-red-200 hover:text-red-500"}`}
                >
                  <Heart size={18} fill={wishlist ? "currentColor" : "none"} />
                </button>
                <button className="p-2.5 rounded-xl border border-dark-200 text-dark-500 hover:border-brand-300 transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(phone.rating) ? "fill-amber-400 text-amber-400" : "text-dark-200 fill-dark-200"} />
                ))}
              </div>
              <span className="font-bold text-dark-800 font-body">{phone.rating}</span>
              <span className="text-dark-400 text-sm font-body">({phone.reviews} reviews)</span>
            </div>

            {/* Condition badge */}
            <div className="flex items-center gap-3 mt-5">
              <span className="bg-green-100 text-green-700 font-semibold text-sm px-4 py-2 rounded-xl font-body flex items-center gap-2">
                <ShieldCheck size={16} />
                {phone.condition}
              </span>
              {phone.verified && (
                <span className="bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-2 rounded-xl font-body flex items-center gap-2">
                  <Check size={16} />
                  Ashwin Verified
                </span>
              )}
            </div>

            {/* Price */}
            <div className="mt-6 bg-brand-50 rounded-2xl p-5 border border-brand-100">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold font-display text-dark-900">
                  ₹{phone.buyPrice.toLocaleString()}
                </span>
                <div className="mb-1">
                  <span className="text-dark-400 line-through text-sm font-body">₹{phone.originalPrice.toLocaleString()}</span>
                  <span className="ml-2 text-green-600 font-semibold text-sm font-body">{phone.discount}% off</span>
                </div>
              </div>
              <p className="text-dark-500 text-xs font-body mt-1">
                You save ₹{(phone.originalPrice - phone.buyPrice).toLocaleString()} vs new price
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-dark-600 font-body">
                <Truck size={14} className="text-blue-500" />
                Free delivery by tomorrow
              </div>
            </div>

            {/* Sell price callout */}
            <div className="mt-3 bg-white rounded-xl p-4 border border-dark-200 flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-500 font-body">Want to sell this phone later?</p>
                <p className="font-bold text-dark-800 font-body">You could get up to <span className="text-brand-500">₹{phone.sellPrice.toLocaleString()}</span></p>
              </div>
              <Link to="/sell" className="text-brand-600 font-semibold text-sm font-body hover:underline">Sell Now →</Link>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-3">
              <button className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2">
                <Zap size={18} /> Buy Now
              </button>
              <button className="btn-secondary w-full py-4 flex items-center justify-center gap-2">
                Add to Cart
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: <ShieldCheck size={18} className="text-green-500" />, label: "6 Month Warranty" },
                { icon: <Truck size={18} className="text-blue-500" />, label: "Free Delivery" },
                { icon: <CreditCard size={18} className="text-purple-500" />, label: "Easy Returns" },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-1 p-3 bg-dark-50 rounded-xl text-center">
                  {b.icon}
                  <span className="text-xs font-semibold text-dark-600 font-body">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-6 card p-5">
              <h3 className="font-bold font-display text-dark-900 mb-4">Specifications</h3>
              <div className="divide-y divide-dark-100">
                {specs.map(s => (
                  <div key={s.label} className="flex justify-between py-2.5 text-sm font-body">
                    <span className="text-dark-400">{s.label}</span>
                    <span className="font-semibold text-dark-700">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related phones */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title mb-6">Similar Phones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(p => <PhoneCard key={p.id} phone={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneDetailPage;
