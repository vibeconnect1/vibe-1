import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
const themeColor = useSelector((state)=> state.theme.color)

  useEffect(() => {
    const footer = document.querySelector(".hideIt");

    const hideFooter = () => {
      if (window.innerWidth <= 786) {
        footer.classList.add('hide-on-small-screen');
      }
    };

    const handleMouseEnter = () => {
      if (window.innerWidth <= 786) {
        footer.classList.remove('hide-on-small-screen');
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 786) {
        footer.classList.add('hide-on-small-screen');
      }
    };
    setTimeout(hideFooter, 5000);
    footer.addEventListener('mouseenter', handleMouseEnter);
    footer.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      footer.removeEventListener('mouseenter', handleMouseEnter);
      footer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <footer className="hideIt fixed bottom-0 w-screen">
      <div style={{background: themeColor}}>
        <p className="text-center text-white">
          Copyright © 2023 Digielves Tech Wizards Private Limited. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
