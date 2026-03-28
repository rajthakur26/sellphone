import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  const contacts = [
    {
      icon: <Phone size={22} className="text-brand-500" />,
      title: "Call Us",
      lines: ["1800-212-6415 (Toll Free)", "Mon–Sun: 9 AM – 9 PM"],
      bg: "bg-orange-50",
    },
    {
      icon: <Mail size={22} className="text-blue-500" />,
      title: "Email Us",
      lines: ["support@ashwin.in", "Response within 24 hrs"],
      bg: "bg-blue-50",
    },
    {
      icon: <MessageCircle size={22} className="text-green-500" />,
      title: "Live Chat",
      lines: ["Chat with us instantly", "Available 24/7 on the app"],
      bg: "bg-green-50",
    },
    {
      icon: <MapPin size={22} className="text-purple-500" />,
      title: "Head Office",
      lines: ["Plot 37, Sector 44", "Gurugram, Haryana – 122003"],
      bg: "bg-purple-50",
    },
  ];

  const faqs = [
    { q: "How long does the pickup take?", a: "Our agents typically arrive within 2 hours of booking. We operate Mon–Sun 9 AM – 9 PM." },
    { q: "Is the price quoted guaranteed?", a: "The quote is based on the condition you describe. The final price is confirmed after physical inspection, which is usually the same." },
    { q: "How do I get paid?", a: "We offer instant payment via UPI, NEFT/RTGS bank transfer, or cash at the time of pickup." },
    { q: "What if I'm not happy with the final price?", a: "You can decline the offer anytime before final confirmation. We'll return your device at no extra cost." },
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 to-dark-800 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-display text-white mb-3">Get In Touch</h1>
          <p className="text-dark-400 font-body text-lg">We're here to help. Reach out via any channel below.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map((c, i) => (
            <div key={i} className={`card p-5 text-center hover:-translate-y-1 transition-all duration-300`}>
              <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {c.icon}
              </div>
              <h3 className="font-bold font-display text-dark-900 mb-2">{c.title}</h3>
              {c.lines.map((l, j) => (
                <p key={j} className={`text-sm font-body ${j === 0 ? "text-dark-700 font-medium" : "text-dark-400"}`}>{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-display text-dark-900 mb-2">Message Sent!</h3>
                <p className="text-dark-500 font-body">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-6 btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold font-display text-dark-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Email Address *</label>
                    <input
                      type="email"
                      placeholder="rahul@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="input-field appearance-none"
                    >
                      <option value="">Select a topic</option>
                      <option>Sell Phone Query</option>
                      <option>Buy Phone Query</option>
                      <option>Payment Issue</option>
                      <option>Order Tracking</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark-700 font-body mb-1.5 block">Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-field resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold font-display text-dark-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card p-5">
                  <h3 className="font-semibold font-body text-dark-900 mb-2 flex items-start gap-2">
                    <span className="w-6 h-6 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">Q</span>
                    {faq.q}
                  </h3>
                  <p className="text-dark-500 text-sm font-body leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="card p-5 mt-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Clock size={18} className="text-amber-600" />
                </div>
                <h3 className="font-bold font-display text-dark-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm font-body">
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
                  { day: "Saturday – Sunday", time: "10:00 AM – 7:00 PM" },
                  { day: "Public Holidays", time: "10:00 AM – 5:00 PM" },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-dark-500">{h.day}</span>
                    <span className="font-semibold text-dark-700">{h.time}</span>
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

export default ContactPage;
