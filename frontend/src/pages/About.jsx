import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">About EnterConnect</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>EnterConnect</strong> is a dynamic MERN-stack platform designed to empower entrepreneurs 
          by providing a space to post ideas, connect with investors, mentors, and co-founders. 
          Using AI-driven idea grouping, we ensure that relevant ideas reach the right audience.  
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>🚀 AI-driven idea categorization for better discovery.</li>
          <li>💡 Entrepreneurs can post ideas and attract potential investors or co-founders.</li>
          <li>📅 Aggregated feed of startup events like conferences and pitch sessions.</li>
          <li>📢 Blog-like section to showcase startup ideas.</li>
          <li>📲 One-click "I'm Interested" button to connect via WhatsApp.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          EnterConnect aims to bridge the gap between entrepreneurs and resources by creating an interactive 
          and collaborative ecosystem where innovative ideas thrive.  
        </p>

        <h2 className="text-2xl font-semibold mt-6">Get Involved</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're an entrepreneur with a groundbreaking idea, an investor looking for the next big thing,  
          or a mentor wanting to guide startups, EnterConnect is the place for you!  
          Join us today and be a part of the startup revolution. 🚀  
        </p>
      </div>
    </div>
  );
};

export default About;
