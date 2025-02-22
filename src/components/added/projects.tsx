"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomHeader from "../common/CustomHeader";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  activeTab: 'concept design' | 'app development';
  projectlink: string;
  codelink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  activeTab,
  projectlink,
  codelink 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[800px] h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
    >
      <div className="relative overflow-hidden group h-[70%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
          <a
            href={projectlink}
            className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition"
          >
            View Project
          </a>
          {activeTab === 'app development' && (
            <a
              href={codelink}
              className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>

      <div className="h-[30%] pb-8 ml-6 mt-8 flex flex-col align-top">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState<'concept design' | 'app development'>('concept design');

  const designProjects = [
    {
      title: "Vision Mate",
      description: "AI-powered mobile app designed to assist individuals with visual disabilities. It leverages computer vision technology to help users identify objects, read text, and navigate obstacles.",
      image: "/images/Project Vision Mate.png",
      projectlink: "https://www.figma.com/community/file/1474544293587539912", // Add actual URL
      codelink: "#" // Not used but required by interface
    },
    {
      title: "Ethicard: Shop Responsibly, Live Ethically",
      description: "Ethicard empowers users to make ethical shopping choices by scanning products and providing instant insights on their human rights, eco-friendliness, and animal welfare impact.",
      image: "/images/Project Ethicard.png",
      projectlink: "https://www.figma.com/community/file/1474546021617234891",
      codelink: "#"
    },
    {
      title: "Fiora",
      description: "Born from a desire to create a meaningful business for my mom post-retirement, Fiora is an online florist shop that lets users design personalized bouquets with AI-powered recommendations.Fiora combines care and convenience for every celebration.",
      image: "/images/Project Fiora.png",
      projectlink: "https://www.figma.com/community/file/1474546770546748364",
      codelink: "#"
    },
  ];

  const codingProjects = [
    {
      title: "Legalysis",
      description: "SaaS platform leveraging AI to analyze contracts, identifying opportunities and risks with unmatched precision. With data-driven insights, it empowers businesses to make smarter, informed decisions.",
      image: "/images/Legalysis Home.jpeg",
      projectlink: "https://legalysis-ai.onrender.com/",
      codelink: "https://github.com/sirine200/AI-Contract-Analysis-Legalysis/blob/main/README.md"
    },
    {
      title: "FormEase",
      description: "AI platform that instantly generates fully customizable forms.Designed for efficiency and ease of use, it offers a seamless experience for generating, managing, and publishing forms without the hassle.",
      image: "/images/FormEase-Home.png",
      projectlink: "https://ai-form-generator-six.vercel.app/",
      codelink: "https://github.com/sirine200/AI-Form-Generator-FormEase/blob/main/README.md"
    },
  ];

  return (
    <div  id={id} className='sm:px-6 md:px-8 lg:px-10 max-w-screen-xl mx-auto '>
      <div>
        <CustomHeader
          title="My Projects"
          description="Turning challenges into impactful solutions, one project at a time."
        />
      </div>

      <div className="flex justify-center mb-8 gap-x-8">
        <div className="bg-gradient-to-t from-blue-500/50 to-purple-500/50 backdrop-blur-md rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 dark:bg-gray-800/90 transition-all duration-300 hover:shadow-md w-[500px] h-[70px]">
          <div className="flex items-center gap-x-15 h-full justify-center">
            {['Concept Design', 'App Development'].map((item) => (
              <button
                key={item}
                className={`relative font-inter mx-8 justify-center text-white text-2xl font-semibold dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors ${
                  activeTab === item.toLowerCase() ? 'text-primary dark:text-primary' : ''
                }`}
                onClick={() => setActiveTab(item.toLowerCase() as "concept design" | "app development")}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 ${
                    activeTab === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 ">
        <div className="flex flex-wrap justify-center gap-20 px-8 relative">
          {(activeTab === 'concept design' ? designProjects : codingProjects).map((project, index) => (
            <div
              key={index}
              className={`w-[800px]  min-w[90%]  h-[600px] ml-6 min-ml-3 mr-6  min-mr-3 relative transition-all duration-300 ${
                index % 2 === 0 ? '-left-1/4' : 'left-1/4'
              }`}
              style={{ transform: `translateX(${index % 2 === 0 ? '0%' : '0%'})` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                activeTab={activeTab}
                projectlink={project.projectlink}
                codelink={project.codelink}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;