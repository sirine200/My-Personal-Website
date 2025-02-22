'use client';
import { useState } from 'react';
import CustomHeader from "../common/CustomHeader";


const Skills = ({ id }: { id: string }) => {
  type TabId = '01' | '02' | '03';

  const [activeTab, setActiveTab] = useState<TabId>('01');

  const contentData = {
    '01': {
      image: '/images/product.png',
      skills: [
        { name: 'Agile Product Management', color: 'bg-purple-500' },
        { name: 'Product Strategy & Roadmapping', color: 'bg-purple-500' },
        { name: 'Backlog Management', color: 'bg-blue-500' },
        { name: 'Go-to-Market & Adoption ', color: 'bg-green-500' }
      ],
      alignment: 'left'
    },
    '02': {
      image: '/images/data.png',
      skills: [
        { name: 'AI-Powered Development ', color: 'bg-green-500' },
        { name: 'API Integrations Management', color: 'bg-blue-500' },
        { name: 'CI/CD Pipeline Knowledge ', color: 'bg-green-500' },
        { name: 'Web Application Architecture ', color: 'bg-purple-500' },
        { name: 'Client-Server Models ', color: 'bg-purple-500' }
      ],
      alignment: 'right'
    },
    '03': {
      image: '/images/tech.png',
      skills: [
        { name: 'Product Analytics', color: 'bg-green-500' },
        { name: 'User Behavior & Funnel Analysis', color: 'bg-purple-500' },
        { name: 'Market & Competitive Analytics', color: 'bg-purple-500' },
        { name: 'A/B Testing ', color: 'bg-purple-500' },
        { name: 'Data Visualization', color: 'bg-blue-500' }
      ],
      alignment: 'left'
    }
  };

  return (
    <section id={id}  className='max-w-screen-xl mx-auto'>
      <div className='mx-auto'>
        <CustomHeader
          title="My Skillset, My Edge"
          description="I translate technical jargon into sales wins, customer needs into engineering priorities, and business goals into measurable results. No silos. No misalignment. Just solutions that make everyone’s job easier."
        />
      </div>
      <div className="relative w-full">
        {/* Navbar */}
        <div className="animate_top mb-8 mx-auto flex flex-wrap md:gap-12 justify-center gap-12">
          {[ 
            { id: "01", label: "Product" }, 
            { id: "02", label: "Technical" }, 
            { id: "03", label: "Data" }, 
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id as TabId)}
              className={`relative flex cursor-pointer justify-center items-center text-center py-8 px-12 mb-4 mt-4`}
            >
              <button
                className={`text-3xl font-bold text-black dark:text-white transition-all ${
                  activeTab === item.id ? 'border-b-2 border-blue-500 dark:border-white' : 'border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <div className='justify-center'>
          {/* Content Section */}
          <div className="mx-auto w-full mt-16">
            {activeTab && (
              <div className={`flex flex-col ${contentData[activeTab].alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 justify-center items-center`}>
                {/* Image Section */}
                <div className="md:w-1/3 w-full relative group">
                  <img
                    src={contentData[activeTab].image}
                    alt="Tab Content"
                    className="w-full h-auto mix-blend-overlay opacity-90"
                  />
                </div>

                {/* Skills Section */}
                <div className="w-[60%] grid grid-cols-2 gap-8">
                  {contentData[activeTab].skills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all hover:shadow-xl">
                      <div className="flex justify-center items-center h-full text-center mb-2">
                        <span className="text-2xl font-semibold text-black dark:text-gray-300">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
