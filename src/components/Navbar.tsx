
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-dekat-500">dekat</span>
              <span className="text-2xl font-light">.me</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dekat-500 sm:text-sm sm:leading-6"
                placeholder="Search businesses..."
              />
            </div>
            <Button variant="ghost">Discover</Button>
            <Button variant="ghost">Categories</Button>
            <Button variant="ghost">Add Business</Button>
            <Button variant="outline" className="flex items-center gap-2">
              <User size={18} />
              Sign In
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
