import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Star, Zap } from "lucide-react";

const PhoneCard = ({ phone }) => {
  const [wishlist, setWishlist] = useState(false);

  const conditionColor = {
    "Like New": "bg-green-100 text-green-700",
    "Good": "bg-blue-100 text-blue-700",
    "Fair": "bg-yellow-100 text-yellow-700",
    "Acceptable": "bg-gray-100 text-gray-700",
  };

  return (
    <Link
      to={`/buy/${phone.id}`}
      className="card group block hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-dark-50 to-dark-100 h-52">
        <img
          src={phone.image}
          alt={phone.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/f97316/ffffff?text=${encodeURIComponent(phone.name)}`;
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`badge text-xs ${phone.badgeColor}`}>
            {phone.badge}
          </span>
          {phone.discount > 0 && (
            <span className="badge bg-red-500 text-white">
              {phone.discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md
            ${wishlist ? "bg-red-500 text-white" : "bg-white text-dark-400 hover:text-red-500"}`}
        >
          <Heart size={16} fill={wishlist ? "currentColor" : "none"} />
        </button>

        {/* Verified ribbon */}
        {phone.verified && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/60 to-transparent px-3 py-2">
            <span className="flex items-center gap-1 text-white text-xs font-body">
              <ShieldCheck size={12} className="text-green-400" />
              Ashwin Verified
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-brand-500 font-semibold font-body">{phone.brand}</p>
            <h3 className="font-semibold text-dark-900 text-sm mt-0.5 font-body leading-tight">{phone.name}</h3>
          </div>
          <span className={`badge text-xs flex-shrink-0 ${conditionColor[phone.condition] || "bg-gray-100 text-gray-700"}`}>
            {phone.condition}
          </span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-2 mt-2 text-xs text-dark-400 font-body">
          <span>{phone.storage}</span>
          <span>•</span>
          <span>{phone.color}</span>
          <span>•</span>
          <span className="flex items-center gap-0.5">
            <ShieldCheck size={11} className="text-green-500" />
            {phone.warranty}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(phone.rating) ? "fill-amber-400 text-amber-400" : "text-dark-200 fill-dark-200"}
              />
            ))}
          </div>
          <span className="text-xs text-dark-500 font-body">{phone.rating} ({phone.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-3 pt-3 border-t border-dark-100">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-dark-900 font-display">
                  ₹{phone.buyPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-dark-400 line-through font-body">
                  ₹{phone.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs text-green-600 font-semibold font-body">
                  Save ₹{(phone.originalPrice - phone.buyPrice).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-dark-400 font-body">Sell for</p>
              <p className="text-sm font-bold text-brand-500 font-display">
                ₹{phone.sellPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={(e) => e.preventDefault()}
          className="mt-3 w-full bg-brand-50 hover:bg-brand-500 text-brand-600 hover:text-white border border-brand-200 hover:border-brand-500 font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-body"
        >
          <Zap size={14} />
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default PhoneCard;
