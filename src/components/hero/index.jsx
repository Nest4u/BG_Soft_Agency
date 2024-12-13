import React from 'react'
import  '../../App.css'
import { motion, useTime  } from "framer-motion"
import iconheader from '../../assets/logohead.png'
export const Hero = () => {
  const time = useTime()
  return (
    
    <div className="relative h-[700px]  overflow-hidden -z-1 bg-bgcol">
     
      <div className="relative">
      <div className="overflow-hidden absolute md:-left-[200px] top-[250px] -left-[300px]  w-[324px] h-[324px] bg-gradient-to-br from-customorange to-customdarkorange rounded-full blur-circle animate-slide-vertical" />
      <div className="overflow-hidden absolute md:-right-[200px] -right-[280px] top-[200px] w-[324px] h-[324px] bg-gradient-to-br from-customdarkorange to-customRed rounded-full blur-circle animate-slide-vertical-reverse" />
      </div>
     
      <div className="container mx-auto py-12 flex flex-col justify-center items-center ">
      <a href="/">
      <motion.div  animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 3,
        repeatDelay: 4 ,
        repeat: Infinity,  
        repeatType: "loop"  
      }}
    >
    
    <img className='h-[65px] w-[65px]' src={iconheader} alt="" /> 
    </motion.div>
                    
                </a>
                <div>
                  <div className=' pt-7'>
                  <h1 className="text-3xl md:text-5xl font-bold text-center"> B&G Soft Agency -  </h1>
                  </div>
                <div  >
                <h1 className="text-3xl md:text-5xl font-bold text-center">  Transformations made real. </h1>
                </div>
                
                </div>
         <div className='max-w-[900px] pt-7'>
         <p className="text-lg md:text-xl text-center text-gray-800 mt-4"> Thrifty and fast launches your MVP. STOP Babysitting Your Development Team And START Scaling Your Product On Time And Within Budget </p>
         </div>
        
        <div className="md:flex items-center justify-center flex-col py-6   pt-7 ">
        <button
      className="bg-transparent border-2 border-black text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 rounded-full w-[170px]"
      onClick={() => window.location.href = 'mailto:maksym.bielinskyi@bgsoft.agency'}
    >
      Get in touch
    </button>
          </div>
      </div>
    </div>

    
  )
}
