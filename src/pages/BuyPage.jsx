import { useState } from "react";
import { Search, Filter, X, ChevronDown, SlidersHorizontal } from "lucide-react";
import PhoneCard from "../components/common/PhoneCard";
import { featuredPhones, brands, filters } from "../data/data";

const BuyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFilters, setMobileFilters] = useState(false);

  const toggleFilter = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const filtered = featuredPhones.filter(p => {
    const q = searchQuery.toLowerCase();
    if (q && !p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
    if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
    if (selectedConditions.length && !selectedConditions.includes(p.condition)) return false;
    if (selectedStorage.length && !selectedStorage.includes(p.storage)) return false;
    if (p.buyPrice < priceRange.min || p.buyPrice > priceRange.max) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price_low") return a.buyPrice - b.buyPrice;
    if (sortBy === "price_high") return b.buyPrice - a.buyPrice;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  const activeFiltersCount = selectedBrands.length + selectedConditions.length + selectedStorage.length + (priceRange.max !== Infinity ? 1 : 0);

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Brands */}
      <div>
        <h3 className="font-bold text-dark-900 font-display mb-3 text-sm">Brand</h3>
        <div className="space-y-2">
          {filters.brands.map(b => (
            <label key={b} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => toggleFilter(selectedBrands, setSelectedBrands, b)}
                className="w-4 h-4 accent-brand-500 cursor-pointer"
              />
              <span className="text-sm text-dark-600 font-body group-hover:text-brand-600 transition-colors">{b}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-bold text-dark-900 font-display mb-3 text-sm">Condition</h3>
        <div className="space-y-2">
          {filters.conditions.map(c => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedConditions.includes(c)}
                onChange={() => toggleFilter(selectedConditions, setSelectedConditions, c)}
                className="w-4 h-4 accent-brand-500 cursor-pointer"
              />
              <span className="text-sm text-dark-600 font-body group-hover:text-brand-600 transition-colors">{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Storage */}
      <div>
        <h3 className="font-bold text-dark-900 font-display mb-3 text-sm">Storage</h3>
        <div className="flex flex-wrap gap-2">
          {filters.storage.map(s => (
            <button
              key={s}
              onClick={() => toggleFilter(selectedStorage, setSelectedStorage, s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-body border-2 transition-all
                ${selectedStorage.includes(s) ? "border-brand-500 bg-brand-50 text-brand-600" : "border-dark-200 text-dark-500 hover:border-brand-300"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-dark-900 font-display mb-3 text-sm">Price Range</h3>
        <div className="space-y-2">
          {filters.priceRanges.map((r) => (
            <label key={r.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceRange.min === r.min && priceRange.max === r.max}
                onChange={() => setPriceRange({ min: r.min, max: r.max })}
                className="w-4 h-4 accent-brand-500 cursor-pointer"
              />
              <span className="text-sm text-dark-600 font-body group-hover:text-brand-600 transition-colors">{r.label}</span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={priceRange.min === 0 && priceRange.max === Infinity}
              onChange={() => setPriceRange({ min: 0, max: Infinity })}
              className="w-4 h-4 accent-brand-500 cursor-pointer"
            />
            <span className="text-sm text-dark-600 font-body group-hover:text-brand-600 transition-colors">All Prices</span>
          </label>
        </div>
      </div>

      {/* Clear all */}
      {activeFiltersCount > 0 && (
        <button
          onClick={() => { setSelectedBrands([]); setSelectedConditions([]); setSelectedStorage([]); setPriceRange({ min: 0, max: Infinity }); }}
          className="w-full text-sm text-red-500 border border-red-200 rounded-xl py-2 hover:bg-red-50 transition-colors font-body font-semibold"
        >
          Clear All Filters ({activeFiltersCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 to-dark-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold font-display text-white mb-2">Buy Refurbished Phones</h1>
          <p className="text-dark-400 font-body">All phones are Ashwin Verified with 6-month warranty</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative flex-1 max-w-xl">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
              <input
                type="text"
                placeholder="Search by brand, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-0 rounded-2xl pl-12 pr-5 py-4 text-dark-800 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-400 font-body shadow-lg"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4 flex items-center justify-between">
          <button
            onClick={() => setMobileFilters(true)}
            className="flex items-center gap-2 bg-white border border-dark-200 rounded-xl px-4 py-2.5 text-sm font-semibold font-body text-dark-700 shadow-sm"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-dark-200 rounded-xl px-4 py-2.5 text-sm font-body text-dark-700 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-brand-300"
            >
              <option value="popular">Most Popular</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter drawer */}
        {mobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-dark-900/50" onClick={() => setMobileFilters(false)}></div>
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold font-display text-dark-900 text-lg">Filters</h2>
                <button onClick={() => setMobileFilters(false)} className="p-2 hover:bg-dark-50 rounded-xl">
                  <X size={20} />
                </button>
              </div>
              <FilterPanel />
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <div className="hidden lg:block w-60 flex-shrink-0">
            <div className="card p-5 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold font-display text-dark-900 flex items-center gap-2">
                  <Filter size={16} /> Filters
                </h2>
                {activeFiltersCount > 0 && (
                  <span className="bg-brand-500 text-white text-xs px-2 py-0.5 rounded-full font-body">{activeFiltersCount}</span>
                )}
              </div>
              <FilterPanel />
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-dark-500 text-sm font-body">
                Showing <span className="font-semibold text-dark-800">{filtered.length}</span> phones
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-dark-500 font-body">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-dark-200 rounded-xl px-4 py-2 text-sm font-body text-dark-700 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedBrands.map(b => (
                  <span key={b} className="flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                    {b}
                    <button onClick={() => toggleFilter(selectedBrands, setSelectedBrands, b)}><X size={12} /></button>
                  </span>
                ))}
                {selectedConditions.map(c => (
                  <span key={c} className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                    {c}
                    <button onClick={() => toggleFilter(selectedConditions, setSelectedConditions, c)}><X size={12} /></button>
                  </span>
                ))}
              </div>
            )}

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(phone => (
                  <PhoneCard key={phone.id} phone={phone} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <span className="text-6xl block mb-4">😕</span>
                <h3 className="text-xl font-bold font-display text-dark-800 mb-2">No phones found</h3>
                <p className="text-dark-400 font-body">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
