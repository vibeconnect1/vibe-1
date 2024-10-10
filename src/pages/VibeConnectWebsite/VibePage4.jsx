import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const VibePage4 = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-purple-800 to-blue-500 relative bottom-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://reshapecxm.com/adobe-reshaping-cxm/media/2c5df09ef1befcf004190799229bb34c/introbackground-full.png')`,
        }}
      ></div>

      <div className="relative p-4 md:p-8 flex items-center justify-center h-screen">
        <div className="text-white max-w-4xl text-center">
          <motion.h1
            className="text-lg md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
            ref={ref}
          >
            {/* For most of history, customer experiences lived in the two-dimensional realm. */}
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
            className="text-sm md:text-xl lg:text-2xl ml-2 md:ml-4 mb-4 md:mb-6 text-justify font-serif  leading-relaxed"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            ref={ref}
          >
Vibe Connect is a comprehensive Workspace 2.0 platform designed to optimize business operations with its all-in-one unified business tool. Our solution includes a wide range of modules, such as workspace management, facility management, HRMS, service desk, project management, and advanced communication tools. With a focus on scalability and flexibility, Vibe Connect enables businesses to streamline processes, improve collaboration, and drive growth without the need for significant upfront investments. Discover how Vibe Connect can transform your business into a more efficient and connected workspace.          </motion.p>
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

export default VibePage4;
