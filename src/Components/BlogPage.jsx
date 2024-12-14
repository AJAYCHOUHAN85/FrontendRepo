import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">BlogNest</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500">About</a></li>
              <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h2>
            <p className="mb-6">A complete guide for design enthusiasts.</p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Read More</button>
          </div>
          <div className="md:w-1/3">
            <img src="https://via.placeholder.com/400x300" alt="Hero" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">All posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt={`Post ${index + 1}`} className="w-full" />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Post Title {index + 1}</h4>
                <p className="text-sm text-gray-600 mb-4">Brief description of the post content goes here.</p>
                <button className="text-yellow-500 hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">All Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Business', 'Startup', 'Economy', 'Technology'].map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="font-bold mb-2">{category}</h4>
              <p className="text-gray-700">Explore posts in {category.toLowerCase()}.</p>
            </div>
          ))}
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

export default BlogPage;
