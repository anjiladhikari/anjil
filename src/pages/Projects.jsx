import React from 'react';
import BentoBox from '../components/BentoBox';

const Projects = () => (
  <section id="projects" className="min-h-screen bg-gray-100 p-8">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <BentoBox>
      {[
        'OCR Technology for Resume Text Extraction',
        'Sentiment Analysis and Image Captioning',
        'AI Grading System for Subjective Assessments',
      ]}
    </BentoBox>
  </section>
);

export default Projects;
