import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Animation variants for "fly-in" from the right
  const sectionVariant = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } }, // Slide into view
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-200 dark:bg-gray-900 p-8">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger every time with 30% in view
        variants={sectionVariant}
      >
        Skills
      </motion.h2>

      {/* Skills Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Languages Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-4 shadow rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
          variants={sectionVariant}
        >
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <ul className="space-y-2">
            <li>🐍 Python</li>
            <li>💻 C</li>
            <li>💻 C++</li>
            <li>🌐 JavaScript</li>
            <li>📄 HTML</li>
            <li>🎨 CSS</li>
            <li>📊 R</li>
            <li>🗃️ SQL</li>
          </ul>
        </motion.div>

        {/* Libraries & Frameworks Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-4 shadow rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
          variants={sectionVariant}
        >
          <h3 className="text-xl font-semibold mb-2">Libraries & Frameworks</h3>
          <ul className="space-y-2">
            <li>📊 Scikit-learn</li>
            <li>🤖 TensorFlow</li>
            <li>🧠 Keras</li>
            <li>🛠️ Pandas</li>
            <li>🧮 Numpy</li>
            <li>⚛️ React.js</li>
            <li>🌐 Express.js</li>
          </ul>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-4 shadow rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
          variants={sectionVariant}
        >
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <ul className="space-y-2">
            <li>🐋 Docker</li>
            <li>🔧 Git</li>
            <li>📬 Postman</li>
            <li>🖥️ VS Code</li>
            <li>📓 Jupyter Notebook</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
