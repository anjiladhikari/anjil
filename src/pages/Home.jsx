import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const Home = () => {
  const particlesInit = async (main) => {
    // You can load custom configurations or plugins here
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: true },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">Anjil Adhikari</h1>
        <p className="text-xl mt-4">Researcher | Machine Learning Engineer </p>
        <div className="mt-6">
          <button className="bg-blue-500 px-4 py-2 rounded mr-2 hover:bg-blue-600">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </button>
          <button className="bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
