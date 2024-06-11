import React from 'react';
import { FaGoogle, FaGithub, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl backdrop-blur-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Register</h2>
        <form className="space-y-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent focus:outline-none w-full py-2 text-gray-700"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent focus:outline-none w-full py-2 text-gray-700"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent focus:outline-none w-full py-2 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-between mt-6">
          <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition duration-300 shadow-md">
            <FaGoogle />
            <span>Login with Google</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition duration-300 shadow-md">
            <FaGithub />
            <span>Login with GitHub</span>
          </button>
        </div>
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};