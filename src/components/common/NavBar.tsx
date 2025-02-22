'use client'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-gray-100 dark:border-gray-700 dark:bg-gray-800/90 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-inter font-bold text-2xl text-gray-900 dark:text-white hover:text-primary transition-colors"
          >
            Welcome!
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-18 gap-x-10">
            {['About', 'Work', 'Skills', 'Projects', 'Volunteering'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-inter text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  activeLink === item.toLowerCase() ? 'text-primary dark:text-primary' : ''
                }`}
                onClick={() => setActiveLink(item.toLowerCase())}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 ${
                  activeLink === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="font-inter bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
           onClick={() => window.location.href = "mailto:sirinesoltanii123@gmail.com"}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
