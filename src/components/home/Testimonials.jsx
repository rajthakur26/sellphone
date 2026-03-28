import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  return (
    <section className="py-16 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Real stories from real people across India</p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-dark-800 text-xl font-display">4.8/5</span>
            <span className="text-dark-400 text-sm font-body">based on 2.1L+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card p-6 relative hover:-translate-y-1 transition-all duration-300"
            >
              <Quote size={32} className="text-brand-100 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-dark-200 fill-dark-200"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-600 text-sm font-body leading-relaxed mb-4 line-clamp-4">
                "{t.text}"
              </p>

              {/* Phone */}
              <div className="bg-dark-50 rounded-xl px-3 py-1.5 inline-block mb-4">
                <span className="text-xs text-dark-500 font-body">📱 {t.phone}</span>
              </div>

              {/* User */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm font-display`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-dark-800 text-sm font-body">{t.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-dark-400 font-body">{t.city}</p>
                    <span className="text-dark-200 text-xs">·</span>
                    <p className="text-xs text-dark-400 font-body">{t.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App store badges */}
        <div className="mt-12 text-center">
          <p className="text-dark-400 text-sm font-body mb-4">Join 20L+ satisfied customers</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="flex items-center gap-3 bg-dark-900 hover:bg-dark-800 text-white px-6 py-3 rounded-xl transition-colors">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-dark-400 text-xs font-body">Download on the</p>
                <p className="font-bold text-sm font-body">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-dark-900 hover:bg-dark-800 text-white px-6 py-3 rounded-xl transition-colors">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <p className="text-dark-400 text-xs font-body">Get it on</p>
                <p className="font-bold text-sm font-body">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
