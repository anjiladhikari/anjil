import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <motion.h2
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        Experience
      </motion.h2>

      {/* Industry Experience */}
      <motion.div
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
        variants={sectionVariant}
      >
        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Industry Experience</h3>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
            <h4 className="font-bold">Services Attendant at Scentre Group</h4>
            <p className="text-gray-600 dark:text-gray-300">Geelong, Australia | Aug 2024</p>
            <p>
              Performed comprehensive data analysis on car park data to enhance efficiency and decision-making.
            </p>
          </li>
          {/* Add more industry experiences */}
        </ul>
      </motion.div>

      {/* Academic Experience */}
      <motion.div
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
        variants={sectionVariant}
      >
        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Academic Experience</h3>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
            <h4 className="font-bold">Teaching Assistant at Fusemachine</h4>
            <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Jan 2023 - Sep 2023</p>
            <p>
              Developed ML, DL, CV, and NLP content for an AI fellowship program. Supervised student projects.
            </p>
          </li>
          {/* Add more academic experiences */}
        </ul>
      </motion.div>

      {/* Volunteer Experience */}
      <motion.div
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-trigger every time in view
        variants={sectionVariant}
      >
        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Volunteer Experience</h3>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
            <h4 className="font-bold">Ambassador at Study Geelong</h4>
            <p className="text-gray-600 dark:text-gray-300">Geelong, Australia | Mar 2024 - Present</p>
            <p>Assisted in planning activities and represented the organization at partner functions.</p>
          </li>
          {/* Add more volunteer experiences */}
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
