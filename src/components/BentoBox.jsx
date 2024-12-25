import React from 'react';

const BentoBox = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {children.map((child, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105"
      >
        {child}
      </div>
    ))}
  </div>
);

export default BentoBox;
