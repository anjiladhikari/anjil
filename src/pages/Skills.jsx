import React from 'react';

const Skills = () => (
  <section id="skills" className="min-h-screen bg-gray-100 p-8">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">Languages</h3>
        <p>Python, C, C++, JS, HTML, CSS, R, SQL</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">Libraries & Frameworks</h3>
        <p>Scikit-learn, TensorFlow, Keras, Pandas, Numpy, React, Express</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">Tools</h3>
        <p>Docker, Git, Postman, VS Code, Jupyter Notebook</p>
      </div>
    </div>
  </section>
);

export default Skills;
