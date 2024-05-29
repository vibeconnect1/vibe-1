import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "black",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = themeSlice.actions;

export default themeSlice.reducer;

// features/theme/themeSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import { getItemInLocalStorage } from '../../utils/localStorage';

// const getInitialState = (userId) => {
//   const savedTheme = getItemInLocalStorage(`theme-${userId}`);
//   return {
//     color: savedTheme ? JSON.parse(savedTheme) : '#ffffff', 
//   };
// };

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState: {},
//   reducers: {
//     setColor: (state, action) => {
//       state[action.payload.userId] = action.payload.color;
//       localStorage.setItem(`theme-${action.payload.userId}`, JSON.stringify(action.payload.color));
//     },
//     setUserTheme: (state, action) => {
//       const userId = action.payload;
//       const savedTheme = localStorage.getItem(`theme-${userId}`);
//       state[userId] = savedTheme ? JSON.parse(savedTheme) : '#ffffff';
//     },
//   },
// });

// export const { setColor, setUserTheme } = themeSlice.actions;
// export default themeSlice.reducer;
