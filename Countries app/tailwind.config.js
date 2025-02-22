/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "hsl(0, 0%, 98%)",
          secondary: "hsl(0, 0%, 100%)",
          accent: "hsl(0, 0%, 52%)",
          neutral: "hsl(200, 15%, 8%)",
          "base-100": "hsl(0, 0%, 100%)",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "hsl(207, 26%, 17%)",
          secondary: "hsl(209, 23%, 22%)",
          accent: "hsl(209, 23%, 22%)",
          neutral: "hsl(0, 0%, 100%)",
          "base-100": "hsl(0, 0%, 100%)",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
