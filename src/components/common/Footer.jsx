import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Store Locator", href: "/stores" },
      { label: "Franchise", href: "/franchise" },
    ],
    sell: [
      { label: "Sell Used Phone", href: "/sell" },
      { label: "Sell in Bulk", href: "/bulk" },
      { label: "Sell MacBook", href: "/sell/macbook" },
      { label: "Sell Tablet", href: "/sell/tablet" },
      { label: "Price Guide", href: "/price-guide" },
    ],
    buy: [
      { label: "Buy Refurbished iPhone", href: "/buy/iphone" },
      { label: "Buy Refurbished Samsung", href: "/buy/samsung" },
      { label: "Buy Refurbished OnePlus", href: "/buy/oneplus" },
      { label: "All Brands", href: "/buy" },
      { label: "Compare Phones", href: "/compare" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/track" },
      { label: "Return Policy", href: "/returns" },
      { label: "Warranty", href: "/warranty" },
    ],
  };

  const socials = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-dark-950 text-dark-300">
      {/* Newsletter */}
      <div className="border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-display text-2xl font-bold">Get the Best Price Alerts</h3>
              <p className="text-dark-400 mt-1 font-body text-sm">Subscribe to get notified about price drops and new arrivals.</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder-dark-500 focus:outline-none focus:border-brand-500 transition-colors font-body"
              />
              <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 transition-colors flex-shrink-0 font-body text-sm">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">A</span>
              </div>
              <span className="text-xl font-bold font-display text-white">
                Ash<span className="text-brand-400">win</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6 font-body">
              India's most trusted platform to sell and buy used & refurbished smartphones. Get the best price in minutes.
            </p>
            <div className="space-y-2 text-sm font-body">
              <div className="flex items-center gap-2 text-dark-400">
                <Phone size={14} className="text-brand-400" />
                <span>1800-212-6415</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <Mail size={14} className="text-brand-400" />
                <span>support@ashwin.in</span>
              </div>
              <div className="flex items-start gap-2 text-dark-400">
                <MapPin size={14} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-dark-800 hover:bg-brand-500 rounded-xl flex items-center justify-center transition-all duration-200 text-dark-400 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Company", items: links.company },
            { title: "Sell", items: links.sell },
            { title: "Buy", items: links.buy },
            { title: "Support", items: links.support },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold font-display text-sm mb-4 uppercase tracking-wide">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-dark-400 hover:text-brand-400 text-sm transition-colors font-body hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download apps */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-dark-400 text-sm font-body">Download our app:</span>
              <a href="#" className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 px-4 py-2 rounded-xl transition-colors">
                <span className="text-lg">🍎</span>
                <div>
                  <p className="text-dark-400 text-[10px] font-body">Download on the</p>
                  <p className="text-white text-xs font-semibold font-body">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 px-4 py-2 rounded-xl transition-colors">
                <span className="text-lg">🤖</span>
                <div>
                  <p className="text-dark-400 text-[10px] font-body">Get it on</p>
                  <p className="text-white text-xs font-semibold font-body">Google Play</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/SSL_certificate_icon.svg/30px-SSL_certificate_icon.svg.png" alt="SSL" className="h-6 opacity-50" />
              <span className="text-dark-500 text-xs font-body">SSL Secured</span>
              <span className="text-dark-700">|</span>
              <span className="text-dark-500 text-xs font-body">100% Safe & Trusted</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs font-body">
            © 2026 Ashwin. All rights reserved. | CIN: U74900HR2013PTC053014
          </p>
          <div className="flex items-center gap-4 text-xs font-body">
            <Link to="/privacy" className="text-dark-500 hover:text-brand-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-dark-500 hover:text-brand-400 transition-colors">Terms of Use</Link>
            <Link to="/cookies" className="text-dark-500 hover:text-brand-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
