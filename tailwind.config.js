/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100%)",
      },
    },
  },
  plugins: [],
};
