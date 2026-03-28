import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { whySellSteps } from "../../data/data";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 bg-mesh pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-body">How It Works</span>
          <h2 className="section-title">Sell Your Phone in 3 Easy Steps</h2>
          <p className="section-sub max-w-2xl mx-auto">No hassle, no negotiations. Get the best price for your phone in minutes with our transparent process.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-brand-200 to-brand-400"></div>

          {whySellSteps.map((step, idx) => (
            <div key={step.step} className="relative text-center group">
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-dark-900 text-white rounded-full flex items-center justify-center text-xs font-bold font-body">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display text-dark-900 mb-3">{step.title}</h3>
              <p className="text-dark-500 font-body leading-relaxed text-sm max-w-xs mx-auto">{step.desc}</p>

              {/* Arrow for mobile */}
              {idx < whySellSteps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center rotate-90">
                    <ArrowRight size={16} className="text-brand-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/sell" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
            Start Selling Now <ArrowRight size={18} />
          </Link>
          <p className="text-dark-400 text-sm mt-3 font-body">No registration required · Takes only 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
