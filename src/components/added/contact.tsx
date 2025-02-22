"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Contact= () => {
  return (
    <div className="   flex  flex-col items-center justify-center gap-8 py-0">
      {/* Buttons - Increased padding & font size */}
      <div className="flex gap-6">
        <a 
          href="mailto:sirinesoltanii123@gmail.com"
          className="px-8 py-4 text-xl text-white bg-blue-600 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-700"
        >
          Contact Me
        </a>
        <a 
          href="https://drive.google.com/file/d/1BhaJYAW0Q5We92JnyHvCAAOIzL-HAhKT/view?usp=sharing" 
          download
          className="px-8 py-4 text-xl text-blue-600 border-2 border-blue-600 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons - Bigger circles & icons */}
      <div className="flex gap-8 mt-6">
        <a 
          href="https://www.linkedin.com/in/sirine-soltani/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 bg-gray-200 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-blue-500"
        >
          <FaLinkedin className="text-3xl text-gray-800 hover:text-white" />
        </a>
        <a 
          href="https://github.com/sirine200" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 bg-gray-200 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-gray-800"
        >
          <FaGithub className="text-3xl text-gray-800 hover:text-white" />
        </a>
        <a 
          href="https://figma.com/@sirinesoltani" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 bg-gray-200 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-purple-500"
        >
          <FiFigma className="text-3xl text-gray-800 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
