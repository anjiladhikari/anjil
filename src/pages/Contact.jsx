import React from 'react';

const Contact = () => (
  <section id="contact" className="min-h-screen bg-gray-100 p-8">
    <h2 className="text-4xl font-bold mb-6">Contact</h2>
    <form className="bg-white p-6 shadow rounded max-w-md mx-auto">
      <label className="block">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Message</span>
        <textarea
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          rows="4"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        Send
      </button>
    </form>
    <p className="text-center mt-6">
      Or email me at <a href="mailto:anjil.adk@gmail.com" className="text-blue-500">anjil.adk@gmail.com</a>
    </p>
  </section>
);

export default Contact;
