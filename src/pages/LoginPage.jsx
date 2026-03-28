import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Phone, ArrowRight, ShieldCheck } from "lucide-react";

const LoginPage = () => {
  const [mode, setMode] = useState("login"); // login | signup | otp
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (val, idx) => {
    const newOtp = [...otp];
    newOtp[idx] = val.slice(-1);
    setOtp(newOtp);
    if (val && idx < 3) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left panel */}
        <div className="hidden md:flex bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-10 flex-col justify-between relative overflow-hidden">
          {/* Decorations */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full"></div>

          <div className="relative">
            <Link to="/" className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-brand-600 font-bold text-xl font-display">A</span>
              </div>
              <span className="text-white text-2xl font-bold font-display">Ashwin</span>
            </Link>
            <h2 className="text-4xl font-bold font-display text-white leading-tight mb-4">
              India's Best<br />Phone Reselling<br />Platform
            </h2>
            <p className="text-orange-100 font-body text-sm leading-relaxed">
              Join 20 lakh+ happy customers who trust us for the best phone deals.
            </p>
          </div>

          <div className="relative space-y-3">
            {[
              { icon: "💰", text: "Best price for your old phone" },
              { icon: "🚀", text: "Free doorstep pickup" },
              { icon: "⚡", text: "Instant payment on the spot" },
              { icon: "🛡️", text: "100% safe & verified" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-body">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel - Form */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 md:hidden">
            <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">A</span>
            </div>
            <span className="text-xl font-bold font-display text-dark-900">Ash<span className="text-brand-500">win</span></span>
          </Link>

          {/* Tab toggle */}
          <div className="flex bg-dark-100 rounded-2xl p-1 mb-8">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold font-body capitalize transition-all duration-200
                  ${mode === m ? "bg-white text-dark-900 shadow-md" : "text-dark-500 hover:text-dark-700"}`}
              >
                {m === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          {mode === "otp" ? (
            <div>
              <h2 className="text-2xl font-bold font-display text-dark-900 mb-1">Enter OTP</h2>
              <p className="text-dark-400 font-body text-sm mb-8">Sent to +91 {form.phone}</p>
              <div className="flex items-center gap-3 justify-center mb-8">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className="w-14 h-14 text-center text-2xl font-bold font-display border-2 border-dark-200 rounded-xl focus:outline-none focus:border-brand-500 transition-colors"
                  />
                ))}
              </div>
              <button className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                <ShieldCheck size={18} /> Verify OTP
              </button>
              <button onClick={() => setMode("login")} className="mt-4 w-full text-center text-sm text-dark-400 font-body hover:text-brand-500 transition-colors">
                Change number
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold font-display text-dark-900 mb-1">
                {mode === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
              </h2>
              <p className="text-dark-400 font-body text-sm mb-7">
                {mode === "login" ? "Login to access your Ashwin account" : "Join 20L+ Indians on Ashwin"}
              </p>

              <div className="space-y-4">
                {mode === "signup" && (
                  <div>
                    <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500 font-body text-sm flex items-center gap-1">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field pl-16"
                    />
                  </div>
                </div>

                {mode === "signup" && (
                  <div>
                    <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Password</label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="input-field pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600"
                    >
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {mode === "login" && (
                  <div className="text-right">
                    <Link to="/forgot-password" className="text-xs text-brand-500 font-body hover:underline">Forgot Password?</Link>
                  </div>
                )}

                <button
                  onClick={() => mode === "login" ? setMode("otp") : setMode("otp")}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-base"
                >
                  {mode === "login" ? "Login" : "Create Account"}
                  <ArrowRight size={18} />
                </button>

                <div className="relative flex items-center gap-3 my-2">
                  <div className="flex-1 h-px bg-dark-200"></div>
                  <span className="text-dark-400 text-xs font-body">or continue with</span>
                  <div className="flex-1 h-px bg-dark-200"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 border border-dark-200 rounded-xl py-3 text-sm font-semibold text-dark-700 hover:bg-dark-50 transition-colors font-body">
                    <span className="text-lg">🍎</span> Apple
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-dark-200 rounded-xl py-3 text-sm font-semibold text-dark-700 hover:bg-dark-50 transition-colors font-body">
                    <span className="text-lg">🌐</span> Google
                  </button>
                </div>
              </div>

              <p className="text-center text-xs text-dark-400 font-body mt-6">
                By continuing, you agree to our{" "}
                <Link to="/terms" className="text-brand-500 hover:underline">Terms</Link> &{" "}
                <Link to="/privacy" className="text-brand-500 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
