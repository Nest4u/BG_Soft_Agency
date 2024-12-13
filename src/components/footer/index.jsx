import React from 'react'
import  '../../App.css'
import iconheader from '../../assets/line.png'

import { useNavigate } from 'react-router-dom';
import {  Linkedin, Send , MessageCircleMore  } from 'lucide-react';
function MenuItem({ href, children }) {
  const navigate = useNavigate();
  return (
    
    <a onClick={() => scrollToSectionIfNotHome(href,navigate)}>
      <li className="text-md font-bold text-link leading-6 hover:underline">{children}</li>
    </a>
  );
}
function scrollToSectionIfNotHome(sectionId,navigate) {
 
  const currentUrl = window.location.pathname;

  if (currentUrl !== '/') {
    navigate('/');

    // Ждем, пока произойдет переход на главную страницу, и затем выполняем скролл к секции
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Section not found:', sectionId);
      }
    }, 1000); // Здесь 1000 - это время в миллисекундах, через которое выполняется скролл после перенаправления
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-left py-10 relative  bg-no-repeat bg-cover bg-center  " style={{ backgroundImage: `url(${iconheader})`,  backgroundPosition: '90% 90%',backgroundSize: '125% 150%' }}>
      <div className='flex flex-col items-center justify-center'>
       <div className="md:container mx-auto py-6 overflow-hidden md:flex md:flex-row md:justify-between  gap-4">
    <div>
    <h4 className="font-bold text-lg mb-4 mt-5  text-orange-200">Contact</h4>
      <ul>
        <li>Email: <a href="mailto:maksym.bielinskyi@bgsoft.agency" className="underline hover:text-orange-500"> maksym.bielinskyi@bgsoft.agency</a></li>
        
        <li> Phone:  <a > +380 63 894 83 33 </a></li>
        <li>CEO: <a > Maksym Belinskyi </a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-4 mt-5 text-orange-200">Work</h4>
      <ul>
         <MenuItem href="about">About</MenuItem>
         <MenuItem href="vision">Vision</MenuItem> 
         <MenuItem href="career">Careers</MenuItem> 
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-4 mt-5 text-orange-200">Hire Engineers</h4>
      <ul>
         <MenuItem href="about">Hire .NET Developers</MenuItem>
         <MenuItem href="vision">Hire React Developers</MenuItem> 
         <MenuItem href="career">Hire Mobile Developers</MenuItem> 
         <MenuItem href="about">Hire .NET Developers</MenuItem>
         <MenuItem href="vision">Hire Backend Developers</MenuItem> 
         <MenuItem href="career">Hire UI/UX Developers</MenuItem> 
      </ul>
    </div>
    <div>
      
      <h4 className="font-bold text-lg mb-4 mt-5 text-orange-200">Services</h4>
      <ul>
         <MenuItem href="sorce">Outstaffing</MenuItem>
         <MenuItem href="sorce">Outsourcing</MenuItem>
      </ul>
    </div>
  </div>
  </div>
      <div className='flex justify-between  mt-[50px] md:container mx-auto py-6 overflow-hidden'>
        <div>
          <p>© 2024 - B&G Soft Agency</p>
        </div>
        <div className='flex gap-4'>
        <a href="https://linkedin.com/in/your-profile" className="text-white hover:text-orange-500">
              <Linkedin size={24} />
            </a>
            <a href="https://linkedin.com/in/your-profile" className="text-white hover:text-orange-500">
              <Send  size={24} />
            </a>
            <a href="https://linkedin.com/in/your-profile" className="text-white hover:text-orange-500">
              <MessageCircleMore  size={24} />
            </a>
        </div>
      </div>
    </footer>
    
  )
}



/* <div className="container mx-auto px-4">
        <h1 className="text-orange-500 text-3xl font-bold text-center mb-6">Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className=" text-xl mb-2"><strong className='text-orange-500'>Name:</strong> Maksym Belinskyi, CEO</p>
            <p className=" text-xl mb-2"><strong className='text-orange-500'>Phone Number:</strong> +380 63 894 83 33 </p>
            <p className=" text-xl mb-2">
              <strong className='text-orange-500'>E-mail Address:</strong> 
              <a href="mailto:maksym.bielinskyi@bgsoft.agency" className="underline hover:text-orange-500"> maksym.bielinskyi@bgsoft.agency</a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/your-profile" className="text-white hover:text-orange-500">
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com/your-profile" className="text-white hover:text-orange-500">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/your-profile" className="text-white hover:text-orange-500">
              <Twitter size={24} />
            </a>
          </div>
          <div className='flex justify-center'>
  <h2>Variation of Work with Us</h2>
  </div>

        </div>
      </div> */