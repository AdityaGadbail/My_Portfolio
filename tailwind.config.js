// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "animate-slideUp",
    "animate-slideLeft",
    "animate-slideRight",
    "animate-scaleUp",
    "animate-fadeIn",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }, 
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
    ,
        scaleUp: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        slideUp: "slideUp 1.2s ease-out",
        slideLeft: "slideLeft 0.8s ease-out",
        slideRight: "slideRight 0.8s ease-out",
        scaleUp: "scaleUp 0.7s ease-out"
      }
    },
  },
  plugins: [],
};
