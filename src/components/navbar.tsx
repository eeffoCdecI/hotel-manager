import { Link } from "react-router-dom";
import { Package } from "./icons";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex items-center h-14">
          <Link
            to="/"
            className="flex items-center gap-2 mr-auto text-lg font-semibold"
          >
            <Package className="w-5 h-5" />
            <span>Acme Inc</span>
          </Link>
          <nav className="flex items-center ml-auto space-x-4">
            <Link
              to="/"
              className="text-sm font-medium transition-colors border-b-2 border-transparent hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-sm font-medium transition-colors border-b-2 border-transparent hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Features
            </Link>
            <Link
              to="/"
              className="text-sm font-medium transition-colors border-b-2 border-transparent hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="text-sm font-medium transition-colors border-b-2 border-transparent hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
