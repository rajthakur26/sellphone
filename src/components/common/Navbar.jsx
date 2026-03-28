import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown, Bell, ShoppingCart, User, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: "Sell Phone", href: "/sell", highlight: true },
    { label: "Buy Phone", href: "/buy" },
    { label: "Repair", href: "/repair" },
    {
      label: "More", href: "#",
      dropdown: [
        { label: "Compare Phones", href: "/compare", icon: "📊" },
        { label: "Blog & News", href: "/blog", icon: "📰" },
        { label: "EMI Calculator", href: "/emi", icon: "🧮" },
        { label: "Store Locator", href: "/stores", icon: "📍" },
      ]
    },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark-900 text-dark-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={11} />
              1800-212-6415 (Mon-Sun 9am-9pm)
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              Free Doorstep Pickup Across India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/track" className="hover:text-brand-400 transition-colors">Track Order</Link>
            <Link to="/seller" className="hover:text-brand-400 transition-colors">Sell in Bulk</Link>
            <Link to="/franchise" className="hover:text-brand-400 transition-colors">Franchise</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b border-dark-100"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-lg font-display">A</span>
              </div>
              <span className="text-xl font-bold font-display text-dark-900">
                Ash<span className="text-brand-500">win</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 font-body
                      ${item.highlight
                        ? "bg-brand-500 text-white hover:bg-brand-600 shadow-brand"
                        : location.pathname === item.href
                          ? "text-brand-500 bg-brand-50"
                          : "text-dark-700 hover:text-brand-500 hover:bg-brand-50"
                      }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-dark-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="p-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-dark-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                          >
                            <span>{sub.icon}</span>
                            <span className="font-medium">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search + Actions */}
            <div className="flex items-center gap-2">
              {/* Search bar desktop */}
              <div className={`hidden md:flex items-center transition-all duration-300 ${searchOpen ? "w-64" : "w-44"}`}>
                <div className="relative w-full">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                  <input
                    type="text"
                    placeholder="Search phones..."
                    value={searchQuery}
                    onFocus={() => setSearchOpen(true)}
                    onBlur={() => setSearchOpen(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-dark-50 border border-dark-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all font-body text-dark-700 placeholder-dark-400"
                  />
                </div>
              </div>

              <button className="p-2 rounded-xl hover:bg-dark-50 text-dark-600 relative transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-brand-500 rounded-full"></span>
              </button>

              <Link to="/cart" className="p-2 rounded-xl hover:bg-dark-50 text-dark-600 relative transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">2</span>
              </Link>

              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dark-200 hover:border-brand-400 text-dark-700 hover:text-brand-600 text-sm font-semibold transition-all duration-200 font-body"
              >
                <User size={16} />
                Login
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-dark-50 text-dark-700 transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-dark-100 animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {/* Mobile search */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                <input
                  type="text"
                  placeholder="Search phones, brands..."
                  className="w-full bg-dark-50 border border-dark-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 font-body"
                />
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold font-body transition-colors
                    ${item.highlight
                      ? "bg-brand-500 text-white"
                      : "text-dark-700 hover:text-brand-600 hover:bg-brand-50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 border-t border-dark-100">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-dark-700 hover:bg-dark-50 font-body">
                  <User size={16} />
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
