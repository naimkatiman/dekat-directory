
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-dekat-500">dekat</span>
              <span className="text-2xl font-light">.me</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Discover and connect with the best local businesses in Malaysia.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Users</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Discover Businesses
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Search by Category
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Write Reviews
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Businesses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Add Your Business
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Claim Your Listing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Business Login
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Premium Spotlight
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  About dekat.me
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-dekat-500">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} dekat.me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
