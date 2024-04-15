/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Background
        main: "hsl(var(--main-background) / <alpha-value>)",
        toggle: "hsl(var(--toggle-background) / <alpha-value>)",
        keypad: "hsl(var(--keypad-background) / <alpha-value>)",
        screen: "hsl(var(--screen-background) / <alpha-value>)",

        // Keys
        "key-1": "hsl(var(--key-background-1) / <alpha-value>)",
        "key-toggle": "hsl(var(--key-background-toggle) / <alpha-value>)",
        "key-2": "hsl(var(--key-background-2) / <alpha-value>)",

        // Text
        "txtclr-1": "hsl(var(--txt-color-1) / <alpha-value>)",
        "txtclr-2": "hsl(var(--txt-color-2) / <alpha-value>)",
        "txtclr-3": "hsl(var(--txt-color-3) / <alpha-value>)",
        "txtclr-4": "hsl(var(--txt-color-4) / <alpha-value>)",
      },
      boxShadow: {
        "skey-1": "inset 0px -5px 0px 0px hsl(var(--key-shadow-1))",
        "skey-2": "inset 0px -5px 0px 0px hsl(var(--key-shadow-2))",
        "skey-3": "inset 0px -5px 0px 0px hsl(var(--key-shadow-3))",
      },
    },
  },
  plugins: [],
};
