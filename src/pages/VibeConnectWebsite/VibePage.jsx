import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CircularProgress from './CircularProgress';

// Variants for animation
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const VibePage = () => {
  const textControls = useAnimation();
  const circleControls = useAnimation();
  const textRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === textRef.current) {
            textControls.start('visible');
          }
          if (entry.target === circleRef.current) {
            circleControls.start('visible');
          }
        } else {
          if (entry.target === textRef.current) {
            textControls.start('hidden');
          }
          if (entry.target === circleRef.current) {
            circleControls.start('hidden');
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
      className="relative bottom-6 flex h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://reshapecxm.com/adobe-reshaping-cxm/media/d209c1b63fae39809d4c050338f999a2/section2-full.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-transparent to-green-700 opacity-90"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between text-white w-full">
        {/* Right side text */}
        <motion.div
          className="flex flex-col justify-between items-center md:absolute md:right-0 md:w-2/3 w-full"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            TACTICS &
            <br />
            TOUCHPOINTS
          </h1>
          <p className="text-md md:text-lg leading-relaxed mb-10 text-center w-11/12 md:w-2/3">
            Reaching people in the right place, at the right time, is essential. At every
            point of interaction with our brands, customers demand quality and congruence. 
          </p>

          {/* 95% Circle */}
          <motion.div
            className="relative flex flex-col items-center md:mr-20 mb-10"
            ref={circleRef}
            initial="hidden"
            animate={circleControls}
            variants={circleVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className='flex flex-col md:flex-row items-center gap-2 md:relative  ml-0 md:ml-56'>
              <CircularProgress percentage={95} />
              <div>
                <p className="text-center text-sm md:text-base">
                  of customers use three or
                  <br />
                  more channels to connect with a
                  <br />
                  company in a single service
                  <br />
                  interaction.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VibePage;
