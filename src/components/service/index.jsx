import React from 'react';
import  '../../App.css'
import iconheader from '../../assets/line.png'
import { Fragment } from 'react'
import{ MoveDown,Quote} from 'lucide-react';
import dev_img from '../../assets/dev.png';
import staff_img from '../../assets/staff.jpg';
import * as variable from '../../variables/index.jsx'
import { Menu, Transition } from '@headlessui/react'
import { useState,useRef, useEffect,useSpring } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideSection from './slider.jsx';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
function Dropdown( {number, text, maintext}) {
     return(
    <Menu as="div" className="relative items-center inline-block text-left w-full py-1" >
      <div className='flex justify-center  items-center border-y-2 mx-3  border-gray-500 lg:mb-0 mb-[20px]  '>
          <Menu.Button className="flex justify-between items-center gap-x-1.5 rounded-md bg-custom-color px-5 py-6 md:text-2xl text-lg font-semibold text-gray-900 h-[110px] w-full  ">
          <div className='flex'>
            <div className='mr-3'>
             {number}
            </div>
          <div>
          {text}
          </div>
          </div>
         
          <MoveDown className="-mr-1 h-6 w-6 text-gray-600" aria-hidden="true" />
          </Menu.Button>
          
      </div>

      <Transition
         as={Fragment}
        enter="transition ease-in-out duration-1000"
  enterFrom="opacity-0 translate-y-[-10px]"
  enterTo="opacity-100 translate-y-0"
  leave="transition ease-in-out duration-1000"
  leaveFrom="opacity-100 translate-y-0"
  leaveTo="opacity-0 translate-y-[-10px]"
      >
        <Menu.Items className="flex p-4   mt-2   bg-opacity-90 rounded-md shadow-lg focus:outline-none">
          <div className="py-1 flex flex-col   items-center">
            {maintext}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
     )
}
function OutStafList( { text1, text2}) {
    return(
   <div className='mx-auto border-b border-gray-500'>
    <h2 className='text-xl text-gray-800 py-2 font-semibold'>{text1}</h2>
    <p>{text2}</p>
   </div>
    )
}
function Rolebase( { text1, image}) {
    return(
   
      <div className="preference-card flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
      <div>
        <img className="h-10 w-10 mr-4 rounded-full object-cover" src={image} alt={text1} />
      </div>
      <div>
        <p className="text-gray-700 font-medium">{text1}</p>
      </div>
    </div>
  
    )
}
gsap.registerPlugin(ScrollTrigger);
export const Service = () => {
  
  React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// ---------- selecting all horizontal sections
			const horizontalSections = gsap.utils.toArray(".horizontal-section",);

			// ---------- applying horizontal scroll animation
			gsap.to(horizontalSections, {
				xPercent: -100 * (horizontalSections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: "#wrapper",
					pin: true,
					scrub: 1,
					snap: 1 / (horizontalSections.length - 1),
					end: () => "+=" + document.querySelector("#container").offsetWidth
				}
			});
		});

		return () => ctx.revert();
	}, []);
       
    return (
        <div className=' mx-auto   overflow-hidden'>

            <section className=" grid lg:grid-cols-3  md:container mx-auto">
                <div className='  col-span-2  mx-2 '>
                    <h1 className='text-4xl'>IT Staff Augmentation Service</h1>
                    <p  className='my-3'> IT staff augmentation allows businesses to scale the existing teams with additional professionals on a constant or on-demand basis. IT staff augmentation services let businesses quickly fill tech positions and boost their efficiency as a result.</p>
                    {/* add link and svg */}
                    <button className="bg-transparent mt-8 border-2 border-black text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 rounded-full w-[250px]">Build a remote team </button> 
                </div>
                <div className='  text-center  '>
                    <h3 className='text-xl '> Complete your team with new players:</h3>
                    <div className='flex justify-center mt-5'>
                    <img className='w-[400px] h-[260px] rounded-xl' src={dev_img} alt="" />
                    </div>
                </div>

            </section>

            <section className='mt-10  md:container mx-auto ' >
                
                
                <div className="grid lg:grid-cols-2 ">
                    <div style={{backgroundImage:`url(${staff_img})`}}  className={` bg-cover bg-center rounded-xl relative overflow-hidden w-auto lg:h-auto h-[400px]   `}>
                        
                    </div>
                    <div className=' w-full  lg:mt-0   items-center'>
                        <div className=' mb-4 text-center'>
                            <h1 className='text-5xl '>Types of Staff Augmentation</h1>
                        </div>
                    
                        {variable.dropmenu.map((menu, index) => (
                        <Dropdown className=" flex" key={index} {...menu}  />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                
                
              <div id="wrapper" className="h-screen content-center items-center w-screen overflow-x-hidden">
      <h1 className="text-5xl text-center mb-[100px]">
        IT Staff Augmentation Service: Our Approach
      </h1>
      
      <div id="container" className="flex h-[30%] justify-start items-center content-center flex-nowrap">
        <section className="horizontal-section m-5 flex justify-start items-start bg-white h-[252px] max-w-[700px] rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl uppercase font-bold mb-4">1. Identifying your Requirements</h1>
            <p className="text-base leading-relaxed">
            We know how to “listen between the lines” and to hear what you don’t even say. To understand your requirements, we dive deep into your business' goals and objectives and analyze your current hiring needs. This way, we provide quality software development staff augmentation services and give you the tech pros who will deliver.
            </p>
          </div>
        </section>
        
        <section className="horizontal-section m-5 flex justify-start items-start bg-white h-[252px] max-w-[700px] rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl uppercase font-bold mb-4">2. Candidates Screening</h1>
            <p className="text-base leading-relaxed">
            Who wants to waste time on meeting candidates who just don’t match the team’s requirements? We know that you don’t. That is why we conduct a thorough screening of all IT candidates and only set up your interviews with those who will fully answer your demands.
            </p>
          </div>
        </section>

        <section className="horizontal-section m-5 flex justify-start items-start bg-white h-[252px] max-w-[700px] rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl uppercase font-bold mb-4">3. Technical Interviews</h1>
            <p className="text-base leading-relaxed">
            No need to spend your resources on all stages of interviews. Our outstaffing team meets with candidates prior to technical interviews to make sure you are introduced only to those who suit your business needs, tech specifications, and project goals. Once we identified the best fit for you, we invite you to a technical interview so that you could make an informed decision.
            </p>
          </div>
        </section>

        <section className="horizontal-section m-5 flex justify-start items-start bg-white h-[252px] max-w-[700px] rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl uppercase font-bold mb-4">4. Newcomers Onboarding</h1>
            <p className="text-base leading-relaxed">
            Onboarding, as simple as it may seem, is a very complicated and important part of a professional’s successful integration into your team. Our IT team augmentation services will take on everything and introduce your new hires to your company policies, team culture, and project. We also take care of the entire scope of documents they need to sign and will provide them with everything they require to start performing their job functions well.
            </p>
          </div>
        </section>

        <section className="horizontal-section m-5 flex justify-start items-start bg-white h-[252px] max-w-[700px] rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl uppercase font-bold mb-4">5. Employer of Record and Operations</h1>
            <p className="text-base leading-relaxed">
            As a professional outstaffing agency, we can go far beyond IT staff augmentation services. We can also provide employer of record and operations services by becoming your official hiring partner far beyond your geography. We will find the most skilled and best-trained tech specialists around the globe, thus expanding your reach and making sure your business can fulfill its potential.
            </p>
          </div>
        </section>

     
      </div>

    </div>
            </section>

          
           
            <section>
                <div className='grid grid-cols-2 mb-64  md:container mx-auto'>
                    <div>
                        <h1 className='text-5xl font-bold  mb-4 '>
                            Why Outstaff Your Team:
                        </h1>
                        <div className=' w-full   items-center'>
                        {variable.outlist.map((list, index) => (
                        <OutStafList className=" flex" key={index} {...list}  />
                        ))}
                    </div>
                    </div>
                    <div className='rounded-xl' style={{backgroundImage:`url(${staff_img})`}}>

                    </div>
                </div>
            </section>
            {/* SET Up YOR PREFERENS */}
           
            
          
            {/* VARIOS IDUSTRIES */}
            <section>
              <SlideSection></SlideSection>
            </section>
            <section className="preferences-section  p-8 rounded-lg  md:container mx-auto">
  <div className="text-center mb-8">
    <h1 className="text-5xl font-bold p-4">Customize Your Preferences</h1>
    <p className="font-bold text-gray-600">
      Unlock the full potential of your tech business with new players in the team.
    </p>
  </div>

  {/* Role-based Section */}
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Role-based</h2>
    <div className="flex flex-wrap gap-4">
      {variable.rolebase.map((list, index) => (
        <Rolebase key={index} text1={list.text1} image={list.image} />
      ))}
    </div>
  </div>

  {/* Skill-based Section */}
  <div>
    <h2 className="text-2xl font-semibold mb-4">Skill-based</h2>
    <div className="flex flex-wrap gap-4">
      {variable.rolebase.map((list, index) => (
        <Rolebase key={index} text1={list.text1} image={list.image} />
      ))}
    </div>
  </div>
</section>

{/* Coments */}
            <section className=" mt-8  md:container mx-auto py-6 overflow-hidden px-4    " id='comments'>
                <div className="lg:grid lg:grid-cols-2  ">
                  <div className='mx-10 p-4'>
                    <h2 className="lg:text-5xl text-4xl font-bold   mb-4 w-[320px]">What Our Partners Say</h2>
                  </div>
                  <div className=" rounded-3xl overflow-hidden flex justify-center">
      <Slider {...variable.settings} className="w-full md:max-w-[530px] h-auto " >
        {variable.testimonials.map((testimonial, index) => (
          <div key={index} className="p-4  min-h-[430px] max-w-[530px] rounded-3xl bg-white">
            <div className="flex justify-between">

              <div className="flex justify-center items-center">
                <Quote className="h-[52px] w-[52px]" />
              </div>

              <div className="flex">
                <div className="mr-3">
                  <h3 className="text-xl font-semibold mb-2">{testimonial.company}</h3>
                  <h3 className="text-xl mb-2">{testimonial.name}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <img className="h-[72px] w-[72px] rounded-full" src={testimonial.img} alt="" />
                </div>
              </div>
            </div>
            <div className='flex h-auto'>
              <p className="text-gray-700 mt-8 ">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </section>
            
             {/* Build Your Dev Team Now!*/}
             
            <section>
            <div className='flex justify-center  border-y-2 my-2   border-black    items-center h-[250px] text-center'  style={{ backgroundImage: `url(${iconheader})`,  backgroundPosition: '90% 100%',backgroundSize: '125% 150%' }} >
                    <div>
                        <h1 className='text-4xl'>Build Your Dev Team Now!</h1>
                        <button className="bg-transparent border-2 border-black text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 rounded-full w-[250px]">Contact us</button>    
                    </div>
                    
                </div>
            </section>
            
        </div>
    );
}

