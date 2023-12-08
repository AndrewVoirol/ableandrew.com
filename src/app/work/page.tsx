// src/app/work/page.tsx
'use client'
import React, { useState } from 'react';
// Import icons from a library like React Icons
import { FaAward, FaBriefcase, FaCertificate, FaGraduationCap, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';

export default function WorkPage() {
  // State for managing modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open modal with detailed information
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Andrew Voirol</h1>
      <h2 className="text-2xl font-semibold mb-4">Generative AI & Tech Innovation</h2>
      <p className="text-lg mb-8">
        With 20+ years of experience spanning enterprise solutions, software architecture, and adventure tourism, I bring a unique combination of technical skills and strategic thinking.
      </p>
      
      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaLightbulb /> Top Skills</h3>
        <ul className="list-disc list-inside">
          <li>Creative Problem Solving</li>
          <li>Analytical Skills</li>
          <li>Marketing Operations</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaCertificate /> Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Introduction to Large Language Models</li>
          <li>Building AI Products with OpenAI Certificate</li>
          <li>Responsible AI: Applying AI Principles with Google Cloud</li>
        </ul>
      </div>

      {/* Honors and Awards Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaAward /> Honors & Awards</h3>
        <p>The Cape and Plymouth Business Magazine 2018 40 under 40 Honoree</p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaBriefcase /> Professional Experience</h3>
        <div className="border p-4 rounded-lg mb-4">
          <h4 className="text-lg font-semibold">Founder & CEO - Your Company</h4>
          <p className="text-sm">Jan 2010 - Present</p>
          <p>Brief description of the role. <span className="text-blue-500 cursor-pointer" onClick={openModal}>Read more</span></p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaGraduationCap /> Education</h3>
        <div className="border p-4 rounded-lg mb-4">
          <h4 className="text-lg font-semibold">Degree - Your University</h4>
          <p className="text-sm">Year of Graduation</p>
          <p>Brief description or major achievements.</p>
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2"><FaProjectDiagram /> Personal Projects</h3>
        <div className="border p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Project Title</h4>
          <p>Description of the project, technologies used, and any notable accomplishments.</p>
        </div>
      </div>

      {/* Modal for Detailed Information */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Detailed Information</h3>
            {/* Add detailed information here */}
          </div>
        </div>
      )}
    </section>
  );
}
