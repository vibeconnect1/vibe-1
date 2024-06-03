// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const ThemedButton = ({ isLink, onClick, title, to, icon }) => {
//     const themeColor = useSelector((state)=> state.theme.color)
//   return (
//     <div>
//       {isLink ? (
//         <Link
//           to={to}
//           className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
//         >
//           {icon}
//           {title}
//         </Link>
//       ) : (
//         <button
//           onClick={onClick}
//           className="bg-black  text-sm rounded-lg flex justify-center font-semibold items-center gap-2 text-white py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 "
//         >
//             {icon}
//           {title}
//         </button>
//       )}
//     </div>
//   );
// };

// export default ThemedButton;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ThemedButton = ({ isLink, onClick, title, to, icon }) => {
  const themeColor = useSelector((state) => state.theme.color);

  const baseStyles =
    "text-sm rounded-md flex justify-center font-semibold items-center gap-2 text-white py-3 px-4 transition-all duration-300";
  const hoverStyles = {
    background: themeColor,
    color: "black",
  };

  return (
    <div className="flex items-center">
      {isLink ? (
        <Link
          to={to}
          className={baseStyles}
          style={{
            hover: hoverStyles,
            
            background: themeColor,
          }}
        >
          {icon}
          {title}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={baseStyles}
          style={{
            ":hover": hoverStyles,
            background: themeColor,
          }}
        >
          {icon}
          {title}
        </button>
      )}
    </div>
  );
};

export default ThemedButton;
