import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-20 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/qrcode" className="text-white hover:text-gray-400">QR Code</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
