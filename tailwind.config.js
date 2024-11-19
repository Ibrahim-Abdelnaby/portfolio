/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Set Transitions
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      transitionDelay: {
        150: "150ms",
        300: "300ms",
      },
      keyframes: {
        // Video Animation
        "video-animate": {
          "0%": { opacity: "0", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // Video Animation
        "video-slide": "video-animate 1s ease-in-out 1s forwards",
        // Hero Content
        "hero-content": "video-animate 1s ease-in-out forwards",
      },
      animationDelay: {
        1000: "4000ms",
      },
    },
  },
  plugins: [],
};
