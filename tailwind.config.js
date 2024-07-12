/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    colors: {
      deepSkyBlue: "#13A8D7",
      white: "#ffffff",
      transparent: "rgba(0,0,0,0.0)",
      darkSlateGray: "#333333",
      darkGray: "#999999",
      darkSlateGray2: "#004063",
      royalBlue: "#236AD4",
      cornFlowerBlue: "#4399EB",
      chineseBlack: "#111111",
    },
    extend: {
      boxShadow: {
        custom: "0px 0px 15px 0px #0000001A",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
