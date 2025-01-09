import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-around">
          <div className="w-1/3">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/qrcode" className="text-gray-600 hover:text-gray-800">QR Code</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            </ul>
          </div>
          <div className="w-1/3">
            <p className="mt-4 text-sm text-gray-600">
              Copyright 2022 Short URL Maker. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


