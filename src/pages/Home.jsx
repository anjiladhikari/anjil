import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Home = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Load all necessary plugins
  };

  const particlesOptions = {
    fullScreen: { enable: false }, // Restrict particles to the container
    background: {
      color: {
        value: "#b61924", // Background color for the particles area
      },
    },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 5 },
      move: { enable: true, speed: 2 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 140, lineLinked: { opacity: 1 } },
        push: { particlesNb: 4 },
      },
    },
    retina_detect: true,
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center"
    >
      {/* Particles limited to the Home section */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ position: 'absolute' }}
        />
      </div>
      {/* Content above particles */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">Anjil Adhikari</h1>
        <p className="text-xl mt-4">Researcher | Machine Learning Engineer </p>
      </div>
    </section>
  );
};

export default Home;
