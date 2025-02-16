import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col ">
        <div className='bg-gradient-to-r from-gray-900 to-gray-800'>
        <h2 className="text-4xl font-bold font-serif text-yellow-400 bg-gradient-to-r from-gray-900 to-gray-800 p-4">Frequently Asked Questions</h2>
      <div className="faq mt-4 bg-gradient-to-r from-gray-900 to-gray-800 p-4 text-2xl rounded-lg shadow-md">
        <details className="mb-4">
          <summary className="font-semibold text-gray-200">What is MoviesWorld?</summary>
          <p className="text-gray-400">MoviesWorld is a platform where you can watch and download your favorite movies and TV shows.</p>
        </details>
        <details className="mb-4">
          <summary className=" font-semibold text-gray-200">How do I download movies?</summary>
          <p className="text-gray-400">To download movies, simply click on the download link provided on the movie page.</p>
        </details>
        <details className="mb-4">
          <summary className=" font-semibold text-gray-200">What is the quality of the movies?</summary>
          <p className="text-gray-400">We provide high-quality movies in 480p, 720p, and 1080p resolutions.</p>
        </details>
        <details className="mb-4">
          <summary className=" font-semibold text-gray-200">Is MoviesWorld free?</summary>
          <p className="text-gray-400">Yes, MoviesWorld is completely free. You can watch and download movies without any subscription or registration.</p>
        </details>
      </div>
        </div>
        
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-10 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">MoviesWorld</h1>
          <p className="text-base opacity-75">Your ultimate movie destination</p>
        </div>

        {/* Center Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg">About Us</h3>
            <p className="text-base opacity-75">Our Story</p>
            <p className="text-base opacity-75">Our Team</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Support</h3>
            <p className="text-base opacity-75">FAQs</p>
            <p className="text-base opacity-75">Contact Us</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="text-base opacity-75">Forum</p>
            <p className="text-base opacity-75">Blog</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Legal</h3>
            <p className="text-base opacity-75">Terms of Service</p>
            <p className="text-base opacity-75">Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-6" />

      {/* Bottom Section - Social Icons & Copyright */}
      <div className="text-center ">
        <div className="flex justify-center mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <p className="text-base opacity-75">©Copyright 2023 MoviesWorld. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
