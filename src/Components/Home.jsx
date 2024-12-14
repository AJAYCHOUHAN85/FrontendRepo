import React from 'react';
import IMAGE from '../assets/Y.svg'


const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Brand Name</h1>
          <nav>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About</a></li>
              <li><a href="/blog" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h2>
          <p className="mb-6">A complete guide for design enthusiasts.</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Get Started</button>
        </div>
      </section>

      {/* Featured and All Posts Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Featured Post</h3>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={IMAGE} alt="Featured" className="w-full" />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">How to improve your design workflow</h4>
              <p className="text-gray-700 mb-4">Tips and tricks to enhance your productivity and creativity.</p>
              <button className="text-yellow-500 hover:underline">Read More</button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">All Posts</h3>
          <ul className="space-y-4">
            <li className="bg-white shadow-md rounded-lg p-4">
              <h5 className="font-semibold">Post Title 1</h5>
              <p className="text-sm text-gray-600">A quick overview of the topic.</p>
            </li>
            <li className="bg-white shadow-md rounded-lg p-4">
              <h5 className="font-semibold">Post Title 2</h5>
              <p className="text-sm text-gray-600">Learn about new trends in design.</p>
            </li>
            <li className="bg-white shadow-md rounded-lg p-4">
              <h5 className="font-semibold">Post Title 3</h5>
              <p className="text-sm text-gray-600">How to implement effective workflows.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">We are a community of creatives</h3>
          <p className="text-gray-700">Helping each other to grow and succeed.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Choose A Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="font-bold mb-2">Design</h4>
            <p className="text-gray-700">Explore design resources and guides.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="font-bold mb-2">Technology</h4>
            <p className="text-gray-700">Stay updated with the latest tech trends.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="font-bold mb-2">Lifestyle</h4>
            <p className="text-gray-700">Tips to improve your daily life.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Subscribe to our newsletter to get the latest updates and news.</p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;
