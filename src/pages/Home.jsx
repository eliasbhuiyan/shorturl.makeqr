import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className='flex flex-col items-center w-full max-w-xl'>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Short URL Maker</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <h2 className="text-center text-2xl font-bold mb-2 text-slate-600 pb-3">Paste the URL to be shortened</h2>
          <label className="block text-gray-700 text-sm font-bold pb-2" htmlFor="url">
            Enter URL:
          </label>
          <div className="flex items-center justify-between">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                placeholder="https://example.com"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Shorten URL
          </button>
        </div>
        <p className='mt-3'>Long URL: <Link to="/qrcode" className='text-blue-500'>https://example.com</Link></p>
      <p className="text-center mt-10 text-gray-600">
        URL Shortener is a free service that allows you to shorten long URLs into shorter ones. With this service, you can easily share long URLs with others without having to worry about the length of the URL. The shortened URL will be free from any tracking or ads, and you can share it with others without any restrictions.
      </p>
      </form>
      </div>
    </div>
  )
}

export default Home
