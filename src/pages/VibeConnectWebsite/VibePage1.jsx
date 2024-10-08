import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CircularProgress from './CircularProgress';

// Variants for animation
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const VibePage1 = () => {
  const textControls = useAnimation();
  const circleControls = useAnimation();
  const textRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === textRef.current) {
            textControls.start("visible");
          }
          if (entry.target === circleRef.current) {
            circleControls.start("visible");
          }
        } else {
          if (entry.target === textRef.current) {
            textControls.start("hidden");
          }
          if (entry.target === circleRef.current) {
            circleControls.start("hidden");
          }
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [textControls, circleControls]);

  return (
    <div
      className="relative bottom-6 flex min-h-screen items-center justify-center bg-cover "
      style={{
        backgroundImage:
          "url('https://reshapecxm.com/adobe-reshaping-cxm/media/fa2cea2b1a0d5d3f55dfc98d8b37d59b/section3-full.png')",
      }}
    >
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between text-white w-full">
        {/* Right side text */}
        <motion.div
          className="flex flex-col justify-between items-center  text-center md:text-right  p-4 md:w-2/3 w-full"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            UNIQUE &
            <br />
            DIFFERENTIATION
          </h1>
          <p className="text-sm md:text-xl leading-relaxed mb-10">
          A seamless workspace experience is more than just convenience—it’s essential for productivity.
          </p>

          {/* 80% Circle */}
          <motion.div
            className="relative flex flex-col items-center mr-0 md:mr-20 mb-10"
            ref={circleRef}
            initial="hidden"
            animate={circleControls}
            variants={circleVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Replace with your actual CircularProgress component */}
            <CircularProgress percentage={75}/>
            <div>
              <p className="text-center text-lg md:text-lg text-justify">
              of businesses think they offer an integrated solution, but only 10% of users feel  
                <br />
                their workflows are truly connected. Vibe Connect stands apart by providing a  
                <br />
                unified platform that actually bridges this gap, giving users the tools they need  
                <br />
                without the complexity.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VibePage1;
