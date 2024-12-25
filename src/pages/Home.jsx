import React from 'react';

const Home = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold">Anjil Adhikari</h1>
    <p className="text-xl mt-2">Researcher | Machine Learning Engineer | Data Analyst</p>
    <div className="mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
        <a href="#contact">Contact Me</a>
      </button>
    </div>
  </section>
);

export default Home;
