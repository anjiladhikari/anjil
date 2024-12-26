import React from 'react';

const Experience = () => (
  <section id="experience" className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Experience</h2>

    {/* Industry Experience */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Industry Experience</h3>
      <ul className="space-y-4">
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Services Attendant at Scentre Group</h4>
          <p className="text-gray-600 dark:text-gray-300">Geelong, Australia | Aug 2024</p>
          <p>
            Performed comprehensive data analysis on car park data to enhance efficiency and decision-making. Troubleshot
            software and system issues, diagnosed hardware problems, and collaborated with teams to improve system
            performance and reliability.
          </p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Machine Learning Engineer at Fusemachine</h4>
          <p className="text-gray-600 dark:text-gray-300">New York, USA | Mar 2022 - Sep 2023</p>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
            <li>Built OCR technology to extract text from resumes.</li>
            <li>Utilized transformer models like BERT, GPT-3, and PaLM for transfer learning.</li>
            <li>Worked on sentiment analysis, text summarization, image captioning, and object detection.</li>
            <li>Managed a team of interns and an associate-level ML engineer.</li>
          </ul>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Data Analyst at slum2school</h4>
          <p className="text-gray-600 dark:text-gray-300">Lagos, Nigeria | Mar 2023 - Present</p>
          <p>
            Collected and visualized data from African schools. Created and managed databases, performed map analytics,
            and used Google products for analysis.
          </p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Data Fellow at Code for Nepal</h4>
          <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Jan 2022 - Feb 2023</p>
          <p>Focused on learning and implementing machine learning. Ranked in the top 10 in weekly leaderboards.</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Content Creator at Code Thulo</h4>
          <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Oct 2021 - Present</p>
          <p>
            Created content related to machine learning, computer vision, time series analysis, and deep learning.
          </p>
        </li>
      </ul>
    </div>

    {/* Academic Experience */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Academic Experience</h3>
      <ul className="space-y-4">
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Teaching Assistant at Fusemachine</h4>
          <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Jan 2023 - Sep 2023</p>
          <p>
            Developed ML, DL, CV, and NLP content for an AI fellowship program. Supervised student projects, conducted
            teaching sessions, and provided administrative support.
          </p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Instructor and Trainer at Shree Seetaram Sanskrit Madhyamik Vidyalaya</h4>
          <p className="text-gray-600 dark:text-gray-300">Devghat, Nepal</p>
          <p>
            Instructed students in web development, Python, JavaScript, and basic AI concepts. Guided teachers on tools
            like Zoom and GeoGebra.
          </p>
        </li>
      </ul>
    </div>

    {/* Volunteer Experience */}
    <div>
      <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Volunteer Experience</h3>
      <ul className="space-y-4">
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Ambassador at Study Geelong</h4>
          <p className="text-gray-600 dark:text-gray-300">Geelong, Australia | Mar 2024 - Present</p>
          <p>Assisted in planning activities and represented the organization at partner functions.</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Volunteer at Acquaint</h4>
          <p className="text-gray-600 dark:text-gray-300">Bellevue, USA | Apr 2023 - Present</p>
          <p>Virtually shared culture and fostered cross-cultural collaboration.</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Volunteer at Amnesty International</h4>
          <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Nov 2022 - Present</p>
          <p>Participated in various human rights programs.</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Volunteer at Team Everest NGO</h4>
          <p className="text-gray-600 dark:text-gray-300">Chennai, India | Oct 2022 - Present</p>
          <p>
            Conducted public speaking training sessions and provided career guidance for undergraduate students.
          </p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Volunteer at Robotics Association of Nepal</h4>
          <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal | Feb 2022 - Present</p>
          <p>Contributed to various robotics activities and programs.</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 shadow rounded">
          <h4 className="font-bold">Volunteer at IEEE Pulchowk Student Branch</h4>
          <p className="text-gray-600 dark:text-gray-300">Lalitpur, Nepal | Jan 2019 - Dec 2020</p>
          <p>Organized and conducted IEEE programs at the university.</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
