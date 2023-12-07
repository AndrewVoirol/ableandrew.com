// src/app/work/page.tsx
import React from 'react';

export default function WorkPage() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Andrew Voirol</h1>
      <h2 className="text-2xl font-semibold mb-4">Generative AI & Tech Innovation</h2>
      <p className="text-lg mb-4">With 20+ years of experience spanning enterprise solutions, software architecture, and adventure tourism, I bring a unique combination of technical skills and strategic thinking. My career began in collaborative architecture and graphic design and evolved to include running a digital marketing and technology solutions company.</p>
      
      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Top Skills</h3>
        <ul className="list-disc list-inside">
          <li>Creative Problem Solving</li>
          <li>Analytical Skills</li>
          <li>Marketing Operations</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Introduction to Large Language Models</li>
          <li>Building AI Products with OpenAI Certificate</li>
          <li>Responsible AI: Applying AI Principles with Google Cloud</li>
        </ul>
      </div>

      {/* Honors and Awards Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Honors & Awards</h3>
        <p>The Cape and Plymouth Business Magazine 2018 40 under 40 Honoree</p>
      </div>
    </section>
  );
}
