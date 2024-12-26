const Skills = () => (
  <section id="skills" className="min-h-screen bg-gray-200 dark:bg-gray-900 p-8">
    <h2 className="text-4xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
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
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
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
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <ul className="space-y-2">
          <li>🐋 Docker</li>
          <li>🔧 Git</li>
          <li>📬 Postman</li>
          <li>🖥️ VS Code</li>
          <li>📓 Jupyter Notebook</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
