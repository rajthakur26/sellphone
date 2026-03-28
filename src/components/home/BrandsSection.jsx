import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { brands } from "../../data/data";

const BrandsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Shop by Brand</h2>
          <p className="section-sub">Find your favorite brand's refurbished phones</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => navigate(`/buy?brand=${brand.name}`)}
              className="group card p-5 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-dark-50 group-hover:bg-brand-50 flex items-center justify-center text-3xl transition-colors duration-300 group-hover:shadow-md">
                {brand.logo}
              </div>
              <div className="text-center">
                <p className="font-semibold text-dark-800 text-sm font-body group-hover:text-brand-600 transition-colors">{brand.name}</p>
                <p className="text-xs text-dark-400 font-body mt-0.5">{brand.count.toLocaleString()} phones</p>
              </div>
            </button>
          ))}

          {/* All brands CTA */}
          <button
            onClick={() => navigate("/buy")}
            className="card p-5 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-gradient-to-br from-brand-50 to-orange-50 border-2 border-dashed border-brand-200 hover:border-brand-400"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center">
              <ArrowRight size={24} className="text-brand-500" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-brand-600 text-sm font-body">All Brands</p>
              <p className="text-xs text-brand-400 font-body mt-0.5">View more</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
