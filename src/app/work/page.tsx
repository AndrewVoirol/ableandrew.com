'use client'
import React, { useState, ReactNode } from 'react';
import { FaAward, FaBriefcase, FaCertificate, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

export default function WorkPage() {
  const [modalContent, setModalContent] = useState<ReactNode>('');
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  };

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Andrew Voirol</h1>
      <h2 className="text-2xl font-semibold mb-4">Generative AI & Tech Innovation</h2>
      {/* Summary from the PDF */}
      <p className="text-lg mb-8">
        With 20+ years of experience spanning enterprise solutions, software architecture, and adventure tourism, 
        Andrew Voirol brings a unique combination of technical skills and strategic thinking. His career began in 
        collaborative architecture and graphic design and evolved to include running a digital marketing and 
        technology solutions agency focused on the hospitality sector. Now, as he turns his focus to AI and machine 
        learning with an interest in the life sciences sector, he is well-positioned to contribute to development, 
        product management, and leadership roles.
      </p>

      {/* Skills Section */}
      <div className="mb-8">
        <div className="flex items-center">
          <FaLightbulb className="mr-2" />
          <h3 className="text-xl font-semibold">Top Skills</h3>
        </div>
        <ul className="list-disc list-inside ml-6">
          <li>Creative Problem Solving</li>
          <li>Analytical Skills</li>
          <li>Marketing Operations</li>
        </ul>
        <button className="ml-6" onClick={() => openModal('Skills Details')}>Read More</button>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <div className="flex items-center">
            <FaCertificate className="mr-2" />
            <h3 className="text-xl font-semibold">Certifcations and Courses</h3>
        </div>
        <ul className="list-disc list-inside ml-6">
          <li>Introduction to Large Language Models</li>
          <li>Building AI Products with OpenAI Certificate</li>
          <li>Responsible AI: Applying AI Principles with Google Cloud</li>
          <li>Introduction to Generative AI</li>
        </ul>
        <button className="ml-6" onClick={() => openModal('Certifications Details')}>Read More</button>
      </div>

      {/* Honors and Awards Section */}
      <div className="mb-8">
        <div className="flex items-center">
          <FaAward className="mr-2" />
          <h3 className="text-xl font-semibold"> Honors & Awards</h3>
        </div>
        <ul className="list-disc list-inside ml-6">
          <li>The Cape and Plymouth Business Magazine 2018 40 under 40 Honoree</li>
        </ul>
        <button className="ml-6" onClick={() => openModal('Honors & Awards Details')}>Read More</button>
      </div>

      {/* Professional Experience Section */}
      <div className="mb-8">
        <div className="flex items-center">
          <FaBriefcase className="mr-2" />
          <h3 className="text-xl font-semibold flex items-center">Professional Experience</h3>
        </div>
        <div className="border p-4 rounded-lg mb-4">
          <h4 className="text-lg font-semibold">Founder - The Social Diner LLC</h4>
          <p className="text-sm">November 2011 - Present</p>
          <p>Leading an agency specializing in holistic marketing and IT management solutions for the food, beverage, and hospitality industry.</p>
          <button onClick={() => openModal('Professional Experience Details')}>Read More</button>
        </div>
        {/* Additional professional experiences from the PDF */}
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <div className="flex items-center">
        <h3 className="text-xl font-semibold flex items-center">
          <FaGraduationCap className="mr-2" />
          Education
        </h3>
        </div>
        <div className="border p-4 rounded-lg mb-4">
          <h4 className="text-lg font-semibold">Harvard University - Division Of Continuing Education</h4>
          <p className="text-sm">2009 - 2010</p>
          <button onClick={() => openModal('Education Details')}>Read More</button>
        </div>
        {/* Additional education details from the PDF */}
      </div>

      {/* Modal for Detailed Information */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" style={{ color: 'black' }}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Detailed Information</h3>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </section>
  );
}
