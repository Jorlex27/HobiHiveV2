import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/NavBar';
import SideBar from '../components/Sidebar';


export default function Home() {

  const [rating, setRating] = useState(0);

  // Fungsi untuk mengubah rating
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col gap-10">

      <nav className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Instagram" className="h-8" />
            </div>
            <div className="flex items-center">
              {/* Search Bar */}
              <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500" />
              {/* Profile Avatar */}
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Profile" className="h-8 w-8 ml-4 rounded-full" />
              {/* Menu Icons */}
              <div className="ml-4 flex space-x-4">
              <FontAwesomeIcon icon={faCog} className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl px-4 py-20 mx-auto pt-16 mt-10 flex-1 flex gap-20">

        <div className="flex-1 px-4">

          <div className="grid grid-cols-1 gap-4">

            <div className="bg-white rounded-lg shadow-md">
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Post" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Post Title</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center justify-between">
                  {/* <!-- Rating --> */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                    </svg>
                  </div>
                  {/* <!-- Join Button -- */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Join</button>
                </div>
              </div>
            </div>

            {/* Repeat for more posts */}
            <div className="bg-white rounded-lg shadow-md">
              <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Post" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Post Title</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`w-5 h-5 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.271 2.234 10.729 2.234 10.951 2.927L12.236 7.093C12.365 7.505 12.738 7.789 13.172 7.789H17.659C18.412 7.789 18.761 8.753 18.169 9.208L14.392 12.032C14.04 12.283 13.885 12.74 14.012 13.145L15.303 17.211C15.526 17.904 14.736 18.486 14.146 18.031L10.369 15.207C10.016 14.956 9.484 14.956 9.131 15.207L5.354 18.031C4.764 18.486 3.974 17.904 4.197 17.211L5.488 13.145C5.615 12.74 5.46 12.283 5.108 12.032L1.331 9.208C0.739 8.753 1.088 7.789 1.841 7.789H6.328C6.762 7.789 7.135 7.505 7.264 7.093L8.549 2.927H9.049Z" />
                      </svg>
                    ))}
                  </div>
                  {/* Join Button */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                    Join
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Group List */}
        <div className="flex-shrink-0 w-1/8 pr-4">

          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Chat Pengguna</h2>
            <ul>

              <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                <div className="relative">
                  <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Group" className="w-12 h-12 rounded-full" />
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium">Nama Pengguna 1</span>
                    <span className="text-gray-500 text-sm ml-5">10:30 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">10 menit yang lalu</span>
                    <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">3</span>
                  </div>
                </div>
              </li>
              
              <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                <div className="relative">
                  <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Group" className="w-12 h-12 rounded-full" />
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium">Nama Pengguna 1</span>
                    <span className="text-gray-500 text-sm">10:30 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">10 menit yang lalu</span>
                    <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">3</span>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div >
  );
}

