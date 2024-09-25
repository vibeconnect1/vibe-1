import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CircularProgress from './CircularProgress';
import { FaUserAlt } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const VibePage2 = () => {
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
      { threshold: 0.2 }
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
      className="min-h-screen relative bottom-4 text-white p-8 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://reshapecxm.com/adobe-reshaping-cxm/media/5fc559849081cdb7dcc3e2d6a4e3c004/section-1-full.png')`
      }}
    >
      <div className="absolute bottom-44 right-80 flex items-center justify-end w-full">
        <div className="relative w-full lg:w-3/5 h-full">
          <img
            src="https://reshapecxm.com/adobe-reshaping-cxm/media/7c0e03037766647599327260c8bf0a41/top-line-full.png"
            alt="Box Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="">
        <motion.h2
          className="text-2xl md:text-4xl lg:mt-4 font-bold  text-white"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          DATA & PERSONALIZATION
        </motion.h2>
        <motion.p
          className="text-base md:text-lg leading-relaxed mt-4 text-white w-full md:w-96"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          When it comes to creating great experiences, reliable and useful data is ground zero. Square one.           When it comes to creating great experiences, reliable and useful data is ground zero. Square one. The point of origin.

        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 pr-0 md:pr-4"
            ref={circleRef}
            initial="hidden"
            animate={circleControls}
            variants={circleVariants}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-4">
              <CircularProgress percentage={80} />
              <p className="text-sm text-white">
                of consumers are more likely to shop with brands who recognize, remember, and provide relevant offers and recommendations.
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex justify-center w-full mt-6 md:mt-0">
  <div className="relative w-64 md:w-96 h-64 md:h-96 bottom-10">
    <div className="relative w-full p-5 left-60">
      <img
        src="https://reshapecxm.com/adobe-reshaping-cxm/media/6f9ef7248886a8f0600bdc4c81c22476/box-line-full.png"
        alt="Box Graphic"
        className="w-full h-full object-contain"
      />
    </div>

    <div className="relative bottom-56 left-52 ml-2">
      <img
        src="https://reshapecxm.com/adobe-reshaping-cxm/media/38800c92fdc0ccfff2e27c8dfc29859d/person-lines-full.png"
        alt="Person Graphic"
        className="absolute inset-0 w-40 md:w-56 h-40 md:h-56 object-contain m-auto"
      />
    </div>
    <div className="relative bottom-56 left-52 ml-2">
      <FaUserAlt size={40} md={52} className="absolute text-purple-200 inset-0 object-contain m-auto" />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default VibePage2;
