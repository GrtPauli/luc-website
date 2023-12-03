/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {      
          sm: "640px",
          // => @media (min-width: 640px) { ... }
    
          md: "768px",
          // => @media (min-width: 768px) { ... }
    
          lg: "1024px",
          // => @media (min-width: 1024px) { ... }
    
          xl: "1280px",
          // => @media (min-width: 1280px) { ... }
    
          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
    
          "3xl": "1800px",
    
          // Min
          "cus-md2-min": "1200px",
          "cus-md3-min": "1001px",
    
          // Max
          "cus-xs": { max: "500px" },
          "cus-md": { max: "1300px" },
          "cus-md2": { max: "1150px" },
          "cus-md3": { max: "1000px" },
          "cus-lg": { max: "1500px" },
          "cus-sm": { max: "768px" },
          "cus-sm2": { max: "640px" },
        },
      },
  },
  plugins: [],
}