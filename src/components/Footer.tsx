import { Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { handleEmailRedirect } from "../redirectMail";
import RedirectModal from "./RedirectModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-(--c5) border-t-5 border-(--c1)/20 hover:border-(--c1)/40 rounded-t-lg transition-all py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-600 hover:text-(--c1) transition-colors"
                >
                  insightorbit11@gmail.com
                </button>
              </p>
              <p className="flex items-center gap-2">
                <a href="tel:+918447659509">+91 8447659509</a>
              </p>
              <a href="https://insightorbit.org" target="_blank">
                insightorbit.org
              </a>
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
              <a
                href="https://drive.google.com/file/d/1Q8eTmq7Kd85_-RBIucavXp0o3n3EQf9i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-xs cursor-pointer"
              >
                Compliant with ESOMAR
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <RedirectModal
            handleEmailRedirect={handleEmailRedirect}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
