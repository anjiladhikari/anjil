import React from 'react';

const Experience = () => (
  <section id="experience" className="min-h-screen bg-gray-200 p-8">
    <h2 className="text-3xl font-bold mb-6">Experience</h2>
    <ul className="space-y-4">
      <li className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Machine Learning Engineer</h3>
        <p className="text-gray-600">Fusemachine, NY (2022-2023)</p>
        <p>
          Developed OCR technology and utilized transformer models for improving performance.
        </p>
      </li>
      <li className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Data Analyst</h3>
        <p className="text-gray-600">slum2school, Lagos (2023-Present)</p>
        <p>
          Visualized and analyzed data from African schools and built company-wide databases.
        </p>
      </li>
      <li className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Services Attendant</h3>
        <p className="text-gray-600">Scentre Group, Geelong (2024-Present)</p>
        <p>
          Performed data analysis on car park data and resolved system issues.
        </p>
      </li>
    </ul>
  </section>
);

export default Experience;
