/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        400: "rgb(var(--color-primary-400) / <alpha-value>)",
        500: "rgb(var(--color-primary-500) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-primary-500) / <alpha-value>)",
      },
      success: {
        400: "rgb(var(--color-success-400) / <alpha-value>)",
        500: "rgb(var(--color-success-500) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-success-500) / <alpha-value>)",
      },
    },
    extend: {},
  },
  plugins: [],
};
