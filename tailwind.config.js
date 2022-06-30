const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //safelist: [/DayPicker/, /BrainhubCarousel/, /button-blue/],

  theme: {
    fontFamily: {
      sans: ["Inter", "Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    extend: {
      fontSize: {
        xxs: "0.5rem",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "18/100": "18%",
        "22/100": "22%",
        "12/50": "24%",
        "14/50": "28%",
        "24/50": "48%",
        "16/100": "16%",
        "18/100": "18%",
        "19/100": "19%",
        "23/100": "23%",
        "32/100": "32%",
        12: "3rem",
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minWidth: {
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        28: "7rem",
        48: "12rem",
        56: "14rem",
      },
      maxWidth: {
        0: "0",
      },
      height: {
        "1/2": "50%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "12/50": "24%",
        "16/100": "16%",
        "18/100": "18%",
        "19/100": "19%",
        "22/100": "22%",
        "23/100": "23%",
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minHeight: {
        5: "1.25rem",
        6: "1.5rem",
        10: "2.5rem",
        32: "8rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        80: "20rem",
        128: "32rem",
        200: "50rem",
        224: "56rem",
      },
      padding: {
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
      },
      margin: {
        "-4": "-1rem",
        "-8": "-2rem",
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
      },
      inset: {
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-8": "-2rem",
        "-12": "-3rem",
        "-100": "-25rem",
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "1/5": "20%",
        "3/5": "60%",
        "1/10": "10%",
        "8/10": "80%",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
      opacity: {
        10: 0.1,
        20: 0.2,
        30: 0.3,
        40: 0.4,
        50: 0.5,
        60: 0.6,
        70: 0.7,
        80: 0.8,
        90: 0.9,
        95: 0.95,
        99: 0.99,
      },
      zIndex: {
        "-10": -10,
        "-40": -40,
        1: 1,
        100: 100,
        200: 200,
        300: 300,
      },
      colors: {
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "white-5": "rgba(255, 255, 255, 0.05)",
        "white-8": "rgba(255, 255, 255, 0.08)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-15": "rgba(255, 255, 255, 0.15)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-80": "rgba(255, 255, 255, 0.8)",
        "white-85": "rgba(255, 255, 255, 0.85)",
        "white-90": "rgba(255, 255, 255, 0.9)",
        "white-95": "rgba(255, 255, 255, 0.95)",
        "white-96": "rgba(255, 255, 255, 0.96)",
        "white-98": "rgba(255, 255, 255, 0.98)",
        "white-99": "rgba(255, 255, 255, 0.99)",
        "black-2": "rgba(0, 0, 0, 0.02)",
        "black-4": "rgba(0, 0, 0, 0.04)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-8": "rgba(0, 0, 0, 0.08)",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-15": "rgba(0, 0, 0, 0.15)",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "black-70": "rgba(0, 0, 0, 0.7)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "black-90": "rgba(0, 0, 0, 0.9)",
        "black-95": "rgba(0, 0, 0, 0.95)",
        "black-98": "rgba(0, 0, 0, 0.98)",
        "cuimc-gray": "rgb(238, 238, 238)",
        "cuimc-light-gray": "rgb(245, 245, 245)",
        "cuimc-light-gray-80": "rgba(245, 245, 245, 0.8)",
        "cuimc-light-gray-90": "rgba(245, 245, 245, 0.9)",
        "cuimc-light-gray-95": "rgba(245, 245, 245, 0.95)",
        "cuimc-dark-gray": "rgb(230, 230, 230)",
        "cuimc-dark-gray2": "rgb(200, 200, 200)",
        "cuimc-orange": "rgb(255, 163, 0)",
        "cuimc-orange-40": "rgba(255, 163, 0, 0.4)",
        "cuimc-orange-50": "rgba(255, 163, 0, 0.5)",
        "cuimc-blue": "#1d4f91",
        "cuimc-blue-5": "rgba(32, 88, 162, 0.05)",
        "cuimc-blue-8": "rgba(32, 88, 162, 0.08)",
        "cuimc-blue-10": "rgba(32, 88, 162, 0.1)",
        "cuimc-blue-20": "rgba(32, 88, 162, 0.2)",
        "cuimc-blue-30": "rgba(32, 88, 162, 0.3)",
        "cuimc-blue-40": "rgba(32, 88, 162, 0.4)",
        "cuimc-blue-50": "rgba(32, 88, 162, 0.5)",
        "cuimc-blue-60": "rgba(32, 88, 162, 0.6)",
        "cuimc-blue-70": "rgba(32, 88, 162, 0.7)",
        "cuimc-blue-80": "rgba(32, 88, 162, 0.8)",
        "cuimc-blue-90": "rgba(32, 88, 162, 0.9)",
        "cuimc-blue-95": "rgba(32, 88, 162, 0.95)",
        "cuimc-blue-98": "rgba(32, 88, 162, 0.98)",
        "cuimc-blue-99": "rgba(32, 88, 162, 0.99)",
        "columbia-secondary-blue": "rgb(108, 173, 223)",
        "columbia-secondary-blue-5": "rgba(108, 173, 223, 0.05)",
        "columbia-secondary-blue-10": "rgba(108, 173, 223, 0.1)",
        "columbia-secondary-blue-20": "rgba(108, 173, 223, 0.2)",
        "columbia-secondary-blue-30": "rgba(108, 173, 223, 0.3)",
        "columbia-secondary-blue-40": "rgba(108, 173, 223, 0.4)",
        "columbia-secondary-blue-50": "rgba(108, 173, 223, 0.5)",
        "columbia-secondary-blue-60": "rgba(108, 173, 223, 0.6)",
        "columbia-secondary-blue-70": "rgba(108, 173, 223, 0.7)",
        "columbia-secondary-blue-80": "rgba(108, 173, 223, 0.8)",
        "columbia-secondary-blue-85": "rgba(108, 173, 223, 0.85)",
        "columbia-secondary-blue-90": "rgba(108, 173, 223, 0.9)",
        "columbia-secondary-blue-95": "rgba(108, 173, 223, 0.95)",
        "columbia-secondary-blue-98": "rgba(108, 173, 223, 0.98)",
        "columbia-secondary-blue-99": "rgba(108, 173, 223, 0.99)",
        "cuimc-bg-blue": "rgb(0, 119, 200)",
        "cuimc-button-blue": "rgb(42, 116, 213)",
        "cuimc-button-blue-5": "rgba(42, 116, 213, 0.05)",
        "cuimc-button-blue-8": "rgba(42, 116, 213, 0.08)",
        "cuimc-button-blue-10": "rgba(42, 116, 213, 0.1)",
        "cuimc-button-blue-15": "rgba(42, 116, 213, 0.15)",
        "cuimc-button-blue-20": "rgba(42, 116, 213, 0.2)",
        "cuimc-button-blue-25": "rgba(42, 116, 213, 0.25)",
        "cuimc-button-blue-30": "rgba(42, 116, 213, 0.3)",
        "cuimc-button-blue-40": "rgba(42, 116, 213, 0.4)",
        "cuimc-button-blue-50": "rgba(42, 116, 213, 0.5)",
        "cuimc-button-blue-60": "rgba(42, 116, 213, 0.6)",
        "cuimc-button-blue-70": "rgba(42, 116, 213, 0.7)",
        "cuimc-button-blue-80": "rgba(42, 116, 213, 0.8)",
        "cuimc-button-blue-90": "rgba(42, 116, 213, 0.9)",
        "columbia-blue": "rgb(8, 73, 163)",
        "columbia-tertiary-blue": "rgb(0, 142, 224)",
        "cuimc-footer": "rgb(65, 81, 108)",
        "cuimc-footer-80": "rgb(65, 81, 108, 0.8)",
        "cuimc-footer-90": "rgb(65, 81, 108, 0.9)",
        "default-color": colors.gray["800"],
        "default-blue": colors.blue["400"],
        "default-green": "rgba(51, 153, 102, 0.7)",
        "default-gray": colors.gray["500"],
        "default-white": "rgba(255, 255, 255, 0.98)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "flat-card": "0 0 5px rgba(0, 0, 0, 0.2)",
        day: "0 0 10px rgba(0, 0, 0, 0.1)",
        button: "0 2px 4px rgba(0, 0, 0, 0.4)",
        "button-over": "0 3px 3px rgba(0, 0, 0, 0.3)",
        search: "0 0 10px rgba(0, 0, 0, 0.15)",
        event: "0 0 20px rgba(0, 0, 0, 0.1)",
        "slide-menu": "0 20px 30px rgba(0, 0, 0, 0.5)",
        header: "0 0 10px rgba(0, 0, 0, 0.5)",
        menu: "0 0 20px rgba(0, 0, 0, 0.25)",
        "card-lg": "0 0 25px rgba(0, 0, 0, 0.15)",
        "square-card": "0 0 20px rgba(0, 0, 0, 0.05)",
        "square-card-lg": "0 0 20px rgba(0, 0, 0, 0.1)",
        "button-lg": "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
        filter: "filter, grayscale, opacity, color",
      },
      scale: {
        102: "1.02",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  variants: {},
  plugins: [],
}
