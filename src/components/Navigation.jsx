import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Retrieve saved mode from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);

    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save the preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newMode;
    });
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-md">
      <ul className="flex justify-between items-center py-4 px-6">
        <div className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </div>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
