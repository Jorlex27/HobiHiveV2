import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Instagram" className="h-8" />
            </div>
            <div className="flex items-center">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500" />
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Profile" className="h-8 w-8 ml-4 rounded-full" />
              <div className="ml-4 flex space-x-4">
                <FontAwesomeIcon icon={faCog} className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar