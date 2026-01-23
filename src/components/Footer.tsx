import { Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-(--c5) border-t-5 border-(--c1)/20 hover:border-(--c1)/40 rounded-t-lg transition-all py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 text-sm">
              <span>Where data meets human truth.</span>
            </p>
            <p className="text-gray-600 text-sm">
              <span>Transforming insights into strategic growth.</span>
            </p>
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-600 hover:text-(--c1) text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-(--c1) text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-gray-600 hover:text-(--c1) text-sm transition-colors"
              >
                Services
              </Link>
              <Link
                to="/why-us"
                className="block text-gray-600 hover:text-(--c1) text-sm transition-colors"
              >
                Why InsightOrbit
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                {" "}
                <a href="/services/#research-methodology">
                  Research Methodology Design
                </a>
              </p>
              <p>
                <a href="/services/#custom-questionnaires">
                  Customised Questionnaires
                </a>
              </p>
              <p>
                <a href="/services/#authentic-data-collection">
                  Authentic Data Collection
                </a>
              </p>
              <p>
                <a href="/services/#reporting-analytics">Reports & Analytics</a>
              </p>
              <p>
                <a href="/services/#growth-recommendations">
                  Growth Recommendations
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <a href="mailto:insightorbit11@gmail.com">
                  insightorbit11@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <a href="tel:+919625133538">+91 9625133538</a>
                <span className="text-gray-600">|</span>
                <a href="tel:+918448790050">+91 8448790050</a>
              </p>
              <a href="https://www.insightorbit.org">www.insightorbit.org</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2026 InsightOrbit. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-(--c4) px-4 py-2 rounded-lg">
              <Award className="w-4 h-4 text-(--c1)" />
              <span className="text-gray-600 text-xs">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-(--c4) px-4 py-2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-(--c1)" />
              <span className="text-gray-600 text-xs">ESOMAR Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
