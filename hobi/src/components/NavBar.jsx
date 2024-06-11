import { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-shadow-blue-gray-900/5 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-gray-600 mr-4 text-xl">
            <FaHome />
          </div>
          <h1 className="text-gray-600 text-xl font-semibold">My Awesome Website</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md py-1 pl-2 pr-2 focus:outline-none  bg-white border border-gray-300"
          />
          <a href="#" className="text-gray-600 hover:text-gray-300">
            <FaSearch />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            <FaUser />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            <FaCog />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md py-1 px-2 w-full focus:outline-none focus:ring focus:border-purple-400 bg-white"
          />
          <a href="#" className="block text-gray-600 hover:text-gray-300 py-2">
            Home
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-300 py-2">
            About
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-300 py-2">
            Contact
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-300 py-2">
            <FaUser /> Profile
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-300 py-2">
            <FaCog /> Settings
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar