import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => (
  <nav className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-md">
    <ul className="flex justify-center space-x-4 py-4">
      {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
        <li key={section}>
          <Link
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            {section}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
