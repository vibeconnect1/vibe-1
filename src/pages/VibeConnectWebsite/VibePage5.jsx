import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const VibePage5 = () => {
  const [textVisible, setTextVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500); // Delay for text animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-purple-800 to-blue-500 relative "  style={{
      backgroundImage:
        "url('https://reshapecxm.com/adobe-reshaping-cxm/media/f5877568151cd68b592fcf6ba3bfb24c/conclusion-full.jpg')",
    }}>
      {/* Background overlay */}
     

      <div className="relative p-4 md:p-6 flex items-center justify-center h-screen">
        <div className="text-white  text-center">
          <motion.h1
            className="text-lg md:text-3xl lg:text-5xl font-bold mb-4  md:mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
            ref={ref}
          >
            Reshape the Customer Experience. Transform Your Business.
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl ml-2 md:ml-4 mb-4 md:mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            ref={ref}
          >
            {/* Point A to Point B. The path to making a purchase was predictably linear, finite, and well traveled. */}
          </motion.p>
          <motion.p
            className="text-sm md:text-lg lg:text-3xl ml-2 md:ml-4 px-40 mb-4 md:mb-6 text-justify font-serif  leading-relaxed"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            ref={ref}
          >
        Vibe Connect reshapes customer experience by personalizing every interaction through data-driven insights. It adapts in real-time to evolving customer needs, ensuring timely, relevant responses. With unified solutions, it streamlines the customer journey across all touchpoints, enhancing satisfaction. Vibe Connect helps your brand stand out by offering consistent, memorable experiences. Stay ahead of the competition by turning customer experience into your biggest strength. Transform your business with Vibe Connect—your customers are ready.
        </motion.p>
        <motion.p
            className="text-sm md:text-lg lg:text-xl ml-2 md:ml-4"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            ref={ref}
          >
            {/* Join us as we enlist some of the most forward-thinking minds in business, and share their views on what it takes to deliver a comprehensive, holistic, unforgettable customer experience. */}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default VibePage5;
