import React, { useState } from 'react';
import { gsap } from 'gsap';
import 'tailwindcss/tailwind.css';

import it from '../../assets/it.jpg';
import creative from '../../assets/creative.jpg';
import buiznes from '../../assets/buizbes.jpg';
import marketing from '../../assets/marketing.jpg';
const SliderSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleButtonClick = (index) => {
    setActiveSection(index);
    gsap.to('.slider-container', {
      xPercent: -99 * index,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };

  const sections = [
    {
      image: it,
      text: 'Section 1 content here.',
    },
    {
      image: creative,
      text: 'Section 2 content here.',
    },
    {
      image: buiznes,
      text: 'Section 3 content here.',
    },
    {
      image: marketing,
      text: 'Section 4 content here.',
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden ">
      <div className="flex justify-around p-4 border-t-2 border-black ">
        {sections.map((_, index) => (
          <button
            key={index}
            className="px-4 py-2 border-2 border-black rounded-full  hover:bg-black hover:text-white"
            onClick={() => handleButtonClick(index)}
          >
             0{index + 1}/ Market
          </button>
        ))}
      </div>
      <div className=" w-full h-[90%] flex overflow-hidden border-y-2 shadow-lg  border-black ">
        <div className="slider-container flex w-full">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex-none w-full flex "
              style={{ transform: `translateX(-${activeSection * 1}%)` }}
            >
                <div className="w-1/2  flex items-center justify-center m-4  ">
                <div className=''>
                <h1 className='text-5xl font-bold mb-5'>Fill Key Positions for Your Business Growth</h1>
                <p className='text-xl'>With more than 13 years of experience, Outstaff Your Team provides remote and flexible staffing solutions, connecting innovative and developing projects with skilled professionals. Great ideas and innovations always start with people.</p>
                </div>
                
                
                    {/* <p>{section.text}</p> */}
                </div>
              <div className="w-1/2 flex flex-wrap content-center m-10 ">
              <div className=' border-2  border-black bg-white rounded-lg shadow-lg '>
                
                <img src={section.image} alt={`Section ${index + 1}`} className="w-[350px] h-[300px] object-cover rounded-lg shadow-md m-3" />
                <div className='m-3'>
                  <h1 className='text-4xl font-bold'> Marketing</h1>
                  <p className='text-xl mt-2'> Unlike some IT staff augmentation companies, we assemble Marketing Teams., Directors, and Analysts together with PPC and SEO Specialists making your project not only great, but also in-demand. </p>
                </div>
               
              </div>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;