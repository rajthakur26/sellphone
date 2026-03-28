import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-dark-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">📱</div>
        <h1 className="text-7xl font-extrabold font-display text-brand-500 mb-2">404</h1>
        <h2 className="text-2xl font-bold font-display text-dark-900 mb-3">Page Not Found</h2>
        <p className="text-dark-400 font-body mb-8 leading-relaxed">
          Oops! Looks like this page got sold already. Let's take you back home.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center gap-2">
            <Home size={18} /> Go Home
          </Link>
          <Link to="/buy" className="btn-secondary flex items-center gap-2">
            Browse Phones <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
