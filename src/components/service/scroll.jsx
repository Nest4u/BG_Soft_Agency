import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Section({ id, children }) {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ target: ref });
    const x = useParallax(scrollXProgress, 300);
  
    useEffect(() => {
      const handleScroll = (event) => {
        const { scrollLeft, clientWidth, scrollWidth } = event.target.scrollingElement;
        if (scrollLeft + clientWidth >= scrollWidth || scrollLeft <= 0) {
          event.target.scrollingElement.scrollLeft = scrollLeft <= 0 ? 1 : scrollWidth - clientWidth - 1;
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: false });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.div ref={ref} className="section w-[250px] h-[250px] flex items-center justify-center bg-gray-500 mx-4 overflow-hidden" style={{ x }}>
        {children}
      </motion.div>
    );
  }
  
  export default Section;