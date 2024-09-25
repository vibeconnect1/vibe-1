import React, { useEffect, useState } from 'react';
import CircularProgress from './CircularProgress';
import ProfilesPage from './ProfilesPage';
import { motion, useAnimation } from 'framer-motion';
import {  useRef } from 'react';
import VibePage from './VibePage';
import VibePage1 from './VibePage1';
import VibePage2 from './VibePage2';
import VibePage3 from './VibePage3';
import ProfileCard from './ProfileCard';
import ProfileCard1 from './ProfileCard1';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const VibeConnectPage = () => {
  const [textVisible, setTextVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
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
    }, 500);  // Delay for text animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col '>
    
   <VibePage3/>
   

   <VibePage2/>
 


<ProfilesPage/>
<VibePage/>
<ProfileCard/>
<VibePage1/>

<ProfileCard1/>
<div
      className="min-h-screen flex flex-col justify-center items-center text-white bottom-4 relative"
      style={{
        backgroundImage: `url('https://reshapecxm.com/adobe-reshaping-cxm/media/f5877568151cd68b592fcf6ba3bfb24c/conclusion-full.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-2xl font-bold">
          Reshape the Customer Experience. Transform Your Business.
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          The bar has been set. Delivering compelling, relevant, and memorable customer experiences is the present <em>and</em> future of doing business. And that means it’s time to transform your brand into an <strong>experience business</strong> with CXM.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Data is the foundation, enabling you to unlock insights to personalize at scale. An adaptable tactical mix, plus the right method and timing of delivery, is the key to keeping pace with your customers’ evolving expectations. And differentiation is your golden opportunity to make a lasting impact on your customers (<em>and</em> your competition).
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Make experience <strong>your</strong> business. For now, your customers are waiting...
        </p>
        <div className="mt-8 ">

          <img src="https://reshapecxm.com/adobe-reshaping-cxm/media/80b433dad601dca25e9a38f252c3b31b/aec-at-2x-half.png" alt="Adobe Experience Cloud" />
        </div>
       
      </div>
    </div>
  </div>
  );
};

export default VibeConnectPage;
