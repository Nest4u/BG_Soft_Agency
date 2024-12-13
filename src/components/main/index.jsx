import React from 'react'
import  '../../App.css'

import { Goal,MoveDown,Eye,Puzzle,Box, ArrowRight,Globe, Cloud,Monitor,ShoppingCart,Heart, Quote,Check  } from 'lucide-react';
import * as variable from '../../variables/index.jsx'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { motion } from "framer-motion"

import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





  function MenuItem({ children }) {
    return (
        
        
          <li
            href="#"
            className="px-4 py-2 text-sm font-semibold"
            
          >
            {children}
          </li>
        
      
    );
  }

  function CustomMenu({ title, description, points, pointData, iconData,id }) {
    
    return (
      <Menu as="div" className="relative items-center  inline-block text-left w-full max-w-[600px]   ">
      <div className=' border-y-2 mx-3 border-gray-500 lg:mb-0 mb-[20px]'>
        <Menu.Button className="flex justify-between     gap-x-1.5 rounded-md bg-custom-color px-5 py-6 md:text-2xl text-lg font-semibold text-gray-900 h-[80px] w-full max-w-[600px]">
          <div className='flex'>
            <div className='mr-3'>
              {id}
            </div>
          <div>
          {title}
          </div>
          
          </div>
          <div>
          <MoveDown className="-mr-1 h-6 w-6 text-gray-600" aria-hidden="true" />
          </div>
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-500"
  enterFrom="opacity-0 translate-y-[-10px]"
  enterTo="opacity-100 translate-y-0"
  leave="transition ease-in-out duration-300"
  leaveFrom="opacity-100 translate-y-0"
  leaveTo="opacity-0 translate-y-[-10px]"
      >
        <Menu.Items className="flex right-0 mt-2 items-center bg-opacity-90 rounded-md shadow-lg focus:outline-none">
          <div className="flex lg:justify-around items-start flex-col">
            <div className=' ml-5'>
              <h3 className='text-lg font-bold'>{title}</h3>
              <p >{description}</p>
              <p className='mt-4 mb-4 font-semibold'>{points}</p>
              <ul>
                {pointData.map((point, index) => (
                  <li key={index} className='flex '>
                    <Check className='w-4 h-4 mt-1 mr-1'/>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap  gap-4 p-4">
              
              {iconData.map(item => (
                <div key={item.id} className="aspect-w-1 aspect-h-1">
                  <div className="w-[110px] h-[110px] hover:drop-shadow-2xl drop-shadow-lg flex flex-col items-center justify-center bg-white hover:bg-gray-100 filter grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <img src={item.image} alt={item.text} className="max-w-[70px] max-h-[70px]" />
                    <span className="mt-2 text-center">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    );
  }
  
  
  
export const Main = () => {

  
    const windowWidth = window.innerWidth;
    const spacing = 210;
    const animationDuration = 35000;
    const colorClasses = ['bg-or3', 'bg-or4', 'bg-or1', 'bg-or2', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
 
  const createAnimation = (delay) => {
    return useSpring({
      
      from: { left: -spacing  },
      
      to: async next => {
        while (true) {
            while(windowWidth < 480){
                await next({ left: windowWidth +450  });
                await next({from: { left: -spacing ,}});
                
            }
            await next({ left:  windowWidth });
          await next({from: { left: -spacing }}); 
        }
      },
      config: { duration: animationDuration },
      delay: delay ,
     
    });
  };
  const props1 =  createAnimation(0);
  const props2 = createAnimation(7000);
  const props3 =  createAnimation(12500);
  const props4 =  createAnimation(20000);
  const props5 = createAnimation(27200) ;


  const radius = 6; 
const circumference = 2 * Math.PI * radius; 
const redPercentage =  (55 / 100) * circumference; 
const greenPercentage = (15 / 100) * circumference; 
const bluePercentage = (25 / 100) * circumference; 
const orangePercentage = (5 / 100) * circumference; 
 

  return (
    <div >

<section>
  <div className="relative w-full h-[100px] bg-white overflow-hidden ">
    <animated.div
      style={{ ...props1 }}
      className="absolute text-nowrap flex  items-center mt-[35px] gap-[10px] font-semibold left-0"
    >
      <Cloud className="w-6 h-6" />
      Efficiency
    </animated.div>
    <animated.div
      style={{ ...props2 }}
      className="absolute flex text-nowrap  items-center mt-[35px] gap-[10px] font-semibold left-0"
    >
      <Globe className="w-6 h-6" />
      Global Talents
    </animated.div>
    <animated.div
      style={{ ...props3 }}
      className="absolute flex text-nowrap  items-center mt-[35px] gap-[10px] font-semibold left-0"
    >
      <Heart className="w-6 h-6" />
      Quality 
    </animated.div>
    <animated.div
      style={{ ...props4 }}
      className="absolute flex text-nowrap  items-center mt-[35px] gap-[10px] font-semibold left-0"
    >
      <Monitor className="w-6 h-6" />
      Non-Stop Support
    </animated.div>
    <animated.div
      style={{ ...props5 }}
      className="absolute flex text-nowrap  items-center mt-[35px] gap-[10px] font-semibold left-0"
    >
      <ShoppingCart className="w-6 h-6" />
      
      Cost Saving
    </animated.div>
  </div>
</section>


     <section className='flex-col   mt-[100px] mb-[50px] md:container mx-auto py-6 overflow-hidden ' id='about'>
        <div>
          <h1 className=' text-5xl font-bold items-center ml-[38px] mx-auto'>Company's mission</h1>
        </div>
        <div>
        <div className='lg:flex lg:justify-around  '>
          <div>
          <p className='text-lg mx-10 mt-7 md:text-xl    '>
        Born in 2020, we've rocketed from a modest local start-up to a global force 
        to be reckoned with. We serve a variety of clients across different industries 
        and continents, proving that the digital transformation power can change 
        businesses for the better.
       </p>
       </div>
       
          <div id='vision'> 
            < p className='text-lg mx-10 mt-7 md:text-xl   '>
                We gather a unique mixture of talents - from ace software developers and data wizards
                to creative designers and QA gurus, all dedicated to bringing your vision to life. 
                Moreover, we don't just offer services; we build long-lasting partnerships. 
                Don’t be shy, you’re a partner, not just a client.
            </p>
            </div>
            </div>
          </div>
     </section>
     <section className="flex justify-around items-stretch flex-wrap  mt-[25px] lg:flex-nowrap md:container mx-auto py-6 overflow-hidden ">
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="flex flex-col  items-center h-[360px] w-[300px] p-2 border border-gray-300 rounded-md hover:shadow-lg mb-4 lg:mb-0">
    <div><Goal className="h-[75px] w-[75px]" /></div>
    <div><h2 className="text-3xl p-5">Mission</h2></div>
    <div className='h-[196px] w-[186px]'>
    <p className="text-left font-semibold ">
      To provide seamless 
      solutions that 
      enhance operational 
      efficiency and drive 
      growth for any kind 
      of business
    </p>
    </div>
    </motion.button>
  
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex flex-col  items-center h-[360px] w-[300px] p-4 border border-gray-300 rounded-md hover:shadow-lg mb-4  lg:mb-0">
    <div><Eye className="h-[75px] w-[75px] и"/></div>
    <div ><h2 className="text-3xl p-4">Vision</h2></div>
    <div className='h-[196px] w-[230px] text-center'>
    <p className="text-left font-semibold ml-5">
      To be the foremost 
      outsourcing partner 
      worldwide, setting 
      benchmarks in 
      innovation, reliability, 
      and customer satisfaction
    </p>
   
  </div>
  </motion.button>
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex flex-col  items-center h-[360px] w-[300px] p-4 pt-7 border border-gray-300 rounded-md hover:shadow-lg">
    <div><Puzzle className="h-[75px] w-[75px]"/></div>
    <div><h2 className="text-3xl p-5">Values</h2></div>
    <div className='h-[196px] w-[225px] text-center'>
    <p className="text-left font-semibold ml-7 ">
    Our core values are:
     </p>
    <p className="text-left font-semibold ml-7 pt-2">
     
      - Responsibility <br /> 
      - Quality <br /> 
      - Efficiency <br /> 
      - Integrity <br /> 
      - Customer focus
    </p>
    </div>
    </motion.button>
</section>


{/* СЕККЦИЯ КАРЬЕРЫ */}
<section className=" mt-8  md:container mx-auto py-6 overflow-hidden   ">
  
  <div className="grid lg:grid-cols-2  mx-auto    w-full flex-grow">
    
  <div className='mx-10 p-4'>
   <h2 id='sorce' className="lg:text-5xl text-4xl  font-bold lg:w-[250px] ">Our Core  Services</h2>
   </div>
    <div className="flex flex-col w-full gap-4 mt-6  flex-grow items-center mx-auto ">
    
      {variable.menus.map((menu, index) => (
        <CustomMenu className="flex " key={index} {...menu} />
      ))}
      
<Menu as="div" className="relative items-center inline-block text-left w-full max-w-[600px]" >
      <div className='flex justify-center  items-center border-y-2 mx-3  border-gray-500 lg:mb-0 mb-[20px]  '>
          <Menu.Button className="flex justify-between gap-x-1.5 rounded-md bg-custom-color px-5 py-6 md:text-2xl text-lg font-semibold text-gray-900 h-[80px] w-full max-w-[600px] ">
          <div className='flex'>
            <div className='mr-3'>
             04/
            </div>
          <div>
          Outstaffing
          </div>
          </div>
         
          <MoveDown className="-mr-1 h-6 w-6 text-gray-600" aria-hidden="true" />
          </Menu.Button>
          
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex right-0  mt-2  items-center  bg-opacity-90 rounded-md shadow-lg focus:outline-none">
          <div className="py-1 flex flex-col">
            <MenuItem>Identifying Needs</MenuItem>
            <MenuItem>Recruiting</MenuItem>
            <MenuItem>Presenting</MenuItem>
            <MenuItem>Onboarding</MenuItem>
            <MenuItem>Monitoring and Communication</MenuItem>
           {/* Добавьте остальные пункты меню */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

   {/* Меню */}
  <Menu as="div" className="relative items-center inline-block text-left w-full max-w-[600px]">
    <div className='flex justify-center mx-3 items-center border-y-2 border-gray-500  '>
    <Menu.Button className="flex justify-between gap-x-1.5 rounded-md bg-custom-color px-5 py-6 md:text-2xl text-lg font-semibold text-gray-900 h-[80px] w-full max-w-[600px] ">
    <div className='flex'>
            <div className='mr-3'>
             05/
            </div>
          <div>
          Outsourcing
          </div>
          </div>
          <MoveDown className="-mr-1 h-6 w-6 text-gray-600" aria-hidden="true" />
          
          
   
    </Menu.Button>
   
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
  <Menu.Items className="flex right-0 z-10 mt-2 origin-top-right bg-custom-color bg-opacity-90 rounded-md shadow-lg focus:outline-none">
    <div className="py-1 flex flex-col ">
      <MenuItem>Identifying Needs</MenuItem>
      <MenuItem>Defining Scope and Budget</MenuItem>
      <MenuItem>Deadline Negotiation</MenuItem>
      <MenuItem>Process Discussion</MenuItem>
      <MenuItem>Results Demonstrating</MenuItem>
    </div>
  </Menu.Items>
</Transition>
</Menu>
    </div>
  </div>
</section>
{/* СЕККЦИЯ ТАРГЕТ КЛИЕНТЫ */}
<section className=" mt-8  md:container mx-auto py-6 overflow-hidden ">
        
        <div className="grid xl:grid-cols-3  mx-auto h-full    flex-grow">
          <div className='xl:col-span-1'>
        <h2 className="lg:text-5xl text-4xl  font-bold mx-10 p-4 mb-8">Target Audience</h2>
        </div>
        <div className='xl:col-span-2'>

        
          <div className="grid lg:grid-cols-2   h-full p-4   flex-grow ">
          <div className='flex justify-center  items-center    p-4 '>
              <p className="text-lg leading-relaxed xl:w-[200px]">
              Our target audience is rather specialized than general, main focus is concentrated on organizations of different sizes, startups and individuals in need of technology services and support.
            </p>
          </div>
          <div className='flex justify-center xl:block'>
            <div className=" relative lg:w-[344px] lg:h-[344px] w-[300px] h-[300px]  ">
              <svg className=" " viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#FE9900" strokeWidth="12" strokeDasharray={`${redPercentage} ${circumference - redPercentage}`} transform="rotate(-90 12 12)" />
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#EC7500" strokeWidth="12" strokeDasharray={`${bluePercentage} ${circumference - bluePercentage}`} transform="rotate(108 12 12)" />
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#AF5A00" strokeWidth="12" strokeDasharray={`${greenPercentage} ${circumference - greenPercentage}`} transform="rotate(-144 12 12)" />
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#773F04" strokeWidth="12" strokeDasharray={`${orangePercentage} ${circumference - orangePercentage}`} transform="rotate(-162 12 12)" />
              </svg>
              <div className="absolute top-[32%] left-[60px] transform -translate-x-1/2 -translate-y-1/2 text-center">
                
                <span className="text-lg font-semibold">5% </span>
              </div>
              <div className="absolute top-[15%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                
                <span className="text-lg font-semibold">15%  </span>
              </div>
              <div className="absolute top-[60%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                
                <span className="text-lg font-semibold">25% </span>
              </div>
              <div className="absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                
                <span className="text-lg font-semibold">55%  </span>
              </div>
            </div>
            </div>
            
            </div>
            </div>
           
      </div>
      <div className="lg:flex   text-center items-center  mt-5 lg:justify-end md:justify-center  md:ml-[50px] ">
        <div className='sm:grid sm:grid-cols-2 lg:flex mx-10'>
            <div className="flex items-center   lg:p-2  lg:mb-2">
                <div className="w-4 h-4 bg-or4 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">Individual Entrepreneurs </span>
              </div>
              <div className="flex items-center lg:p-2  lg:mb-2">
                <div className="w-4 h-4 bg-or3 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">Large Corporations </span>
              </div>
              <div className="flex items-center lg:p-2  lg:mb-2">
                <div className="w-4 h-4 bg-or2 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">Startups</span>
              </div>
              <div className="flex items-center lg:p-2 lg:mb-2">
                <div className="w-4 h-4 bg-or1 rounded-full mr-2"></div>
                <span className="text-sm font-semibold">Small and Medium Companies </span>
              </div>
            </div>
            </div>
    </section>
{/* СЕККЦИЯ КОМЕНТЫ */}
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
  {/* СЕККЦИЯ КАРЬЕРЫ */}
    <section className=" p-8 md:container mx-auto py-6 overflow-hidden " id='career'>
      <div className="text-center mb-8">
        <h2 className="lg:text-5xl text-4xl  font-bold">Career</h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {variable.vacancies.map((vacancy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{vacancy.title}</h3>
            <div className='flex flex-wrap gap-3 max-w-[600px] mx-auto'>
              {vacancy.block.split(' ').map((block, index) => (
                <div key={index} className={`${colorClasses[index % colorClasses.length]} text-white p-2 rounded opacity-50 mb-4 whitespace-nowrap`}>
                {block}
                </div>
              ))}
            </div>
            <div className='flex items-center'>
              {vacancy.status == 'Active' ? (
                <Link to={`/vacancy/${index + 1}`} className="text-dark font-bold py-2 px-4 rounded">Details</Link>
                ) : (
                <span className="text-gray-500 cursor-not-allowed font-bold py-2 px-4 rounded">Details</span>
              )}
              <ArrowRight/>
                <div className='flex items-center'>
                  <p className="text-dark font-semibold text-sm py-2 px-4 rounded">Status: {vacancy.status}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
      
       
    </section>

      
    </div>
    
  )
}
