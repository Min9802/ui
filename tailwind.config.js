/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
const {
  addDynamicIconSelectors,
  addCleanIconSelectors
} = require('@iconify/tailwind');

module.exports = {
  // important: true,
  content: [
    "./resources/**/*.blade.php",
    './resources/js/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  variantOrder: [
    'outlined'
  ],
  variants: {
    extend: {
      // backgroundColor: ['outlined'],
      borderWidth: ['outlined'],
      borderColor: ['outlined'],
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-interaction-variants'),

    addCleanIconSelectors([]),
    addDynamicIconSelectors(),
    addDynamicIconSelectors({
      prefix: "icon-hover",
      overrideOnly: true,
    }),
    plugin(function ({
      addUtilities,
      addComponents,
      matchUtilities,
      addVariant,
      e,
      config
    }) {
      addVariant("outlined", ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(({
          className
        }) => {
          const newClass = e(`outlined${separator}${className}`);
          return `.${newClass}`;
        });
      });
    }),
  ],
  safelist: [{
    pattern: /([a-zA-Z]+)-./,
  },],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inherit: ['system-ui', 'apple-system', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji"]
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      green: '#00a67d',
      white: '#FFFFFF',
      black: '#1C2434',
      'black-2': '#010101',
      body: '#64748B',
      bodydark: '#AEB7C0',
      bodydark1: '#DEE4EE',
      bodydark2: '#8A99AF',
      blue: {
        light: '#D6D2F8',
        DEFAULT: '#3C50E0',
        dark: '#180F69'
      },
      primary: {
        light: '#D6D2F8',
        DEFAULT: '#3C50E0',
        dark: '#180F69'
      },
      secondary: {
        light: '#ebedef',
        DEFAULT: '#9da5b1',
        dark: '#4b4f55'
      },
      success: {
        light: '#D5F1DE',
        DEFAULT: '#219653',
        dark: '#16582C'
      },
      danger: {
        light: '#FADDDD',
        DEFAULT: '#D34053',
        dark: '#6E2828'
      },
      warning: {
        light: '#FEEFD0',
        DEFAULT: '#FFA70B',
        dark: '#77550A'
      },
      info: {
        light: '#D6EBFF',
        DEFAULT: '#0DCAF0',
        dark: '#194A7A'
      },
      dark: {
        light: '#AEB7C0',
        DEFAULT: '#2f3845',
        dark: '#3f4145'
      },
      light: {
        light: '#fbfbfc',
        DEFAULT: '#ffffff',
        dark: '#717272'
      },
      stroke: '#E2E8F0',
      gray: '#EFF4FB',
      graydark: '#333A48',
      gray2: '#F7F9FC',
      gray3: '#FAFAFA',
      'gray-2': '#F7F9FC',
      'gray-3': '#FAFAFA',
      whiten: '#F1F5F9',
      whiter: '#F5F7FD',
      boxdark: '#24303F',
      'boxdark-2': '#1A222C',
      strokedark: '#2E3A47',
      'form-strokedark': '#3d4d60',
      'form-input': '#1d2a39',
      'meta-1': '#DC3545',
      'meta-2': '#EFF2F7',
      'meta-3': '#10B981',
      'meta-4': '#313D4A',
      'meta-5': '#259AE6',
      'meta-6': '#FFBA00',
      'meta-7': '#FF6766',
      'meta-8': '#F0950C',
      'meta-9': '#E5E7EB',
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'title-xxl': ['44px', '55px'],
        'title-xl': ['36px', '45px'],
        'title-xl2': ['33px', '45px'],
        'title-lg': ['28px', '35px'],
        'title-md': ['24px', '30px'],
        'title-md2': ['26px', '30px'],
        'title-sm': ['20px', '26px'],
        'title-xsm': ['18px', '24px'],
      },
      screens: {
        sm: "576px",
        "sm-max": {
          max: "576px"
        },
        md: "768px",
        "md-max": {
          max: "768px"
        },
        lg: "992px",
        "lg-max": {
          max: "992px"
        },
        xl: "1200px",
        "xl-max": {
          max: "1200px"
        },
        "2xl": "1320px",
        "2xl-max": {
          max: "1320px"
        },
        "3xl": "1600px",
        "3xl-max": {
          max: "1600px"
        },
        "4xl": "1850px",
        "4xl-max": {
          max: "1850px"
        },
      },
      colors: () => ({
        white: "#ffffff",
        lightPrimary: "#F4F7FE",
        blueSecondary: "#4318FF",
        brandLinear: "#868CFF",
        gray: {
          50: "#f8f9fa",
          100: "#edf2f7",
          200: "#e9ecef",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#adb5bd",
          600: "#a3aed0",
          700: "#707eae",
          800: "#252f40",
          900: "#1b2559",
        },
        navy: {
          50: "#d0dcfb",
          100: "#aac0fe",
          200: "#a3b9f8",
          300: "#728fea",
          400: "#3652ba",
          500: "#1b3bbb",
          600: "#24388a",
          700: "#1B254B",
          800: "#111c44",
          900: "#0b1437",
        },
        red: {
          50: "#ee5d501a",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#f53939",
          600: "#ea0606",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#fbcf33",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#98ec2d",
          500: "#82d616",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
        },
        green: {
          50: "#05cd991a",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#17ad37",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#21d4fd",
          500: "#17c1e8",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2152ff",
          700: "#1d4ed8",
          800: "#344e86",
          900: "#00007d",
        },
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7928ca",
          800: "#6b21a8",
          900: "#581c87",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ff0080",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        brand: {
          50: "#E9E3FF",
          100: "#C0B8FE",
          200: "#A195FD",
          300: "#8171FC",
          400: "#7551FF",
          500: "#422AFB",
          600: "#3311DB",
          700: "#2111A5",
          800: "#190793",
          900: "#11047A",
        },
        shadow: {
          500: "rgba(112, 144, 176, 0.08)",
        },
      }),
      iconify: {
        fontSize: {
          // Define your default icon size here
          base: '1.5rem', // Adjust the size as needed
        },
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11: '2.75rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14: '3.5rem',
        14.5: '3.625rem',
        15: '3.75rem',
        15.5: '3.875rem',
        16: '4rem',
        16.5: '4.125rem',
        17: '4.25rem',
        17.5: '4.375rem',
        18: '4.5rem',
        18.5: '4.625rem',
        19: '4.75rem',
        19.5: '4.875rem',
        21: '5.25rem',
        21.5: '5.375rem',
        22: '5.5rem',
        22.5: '5.625rem',
        24.5: '6.125rem',
        25: '6.25rem',
        25.5: '6.375rem',
        26: '6.5rem',
        27: '6.75rem',
        27.5: '6.875rem',
        29: '7.25rem',
        29.5: '7.375rem',
        30: '7.5rem',
        31: '7.75rem',
        32.5: '8.125rem',
        34: '8.5rem',
        34.5: '8.625rem',
        35: '8.75rem',
        36.5: '9.125rem',
        37.5: '9.375rem',
        39: '9.75rem',
        39.5: '9.875rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        46: '11.5rem',
        47.5: '11.875rem',
        49: '12.25rem',
        50: '12.5rem',
        52: '13rem',
        52.5: '13.125rem',
        54: '13.5rem',
        54.5: '13.625rem',
        55: '13.75rem',
        55.5: '13.875rem',
        59: '14.75rem',
        60: '15rem',
        62.5: '15.625rem',
        65: '16.25rem',
        67: '16.75rem',
        67.5: '16.875rem',
        70: '17.5rem',
        72.5: '18.125rem',
        73: '18.25rem',
        75: '18.75rem',
        90: '22.5rem',
        94: '23.5rem',
        95: '23.75rem',
        100: '25rem',
        115: '28.75rem',
        125: '31.25rem',
        132.5: '33.125rem',
        150: '37.5rem',
        171.5: '42.875rem',
        180: '45rem',
        187.5: '46.875rem',
        203: '50.75rem',
        230: '57.5rem',
        242.5: '60.625rem',
        '1/2': '0.5rem',
        '1/6': '0.15rem',
        '2/5': '40%'
      },
      maxWidth: {
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        22.5: '5.625rem',
        25: '6.25rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        70: '17.5rem',
        90: '22.5rem',
        94: '23.5rem',
        125: '31.25rem',
        132.5: '33.125rem',
        142.5: '35.625rem',
        150: '37.5rem',
        180: '45rem',
        203: '50.75rem',
        230: '57.5rem',
        242.5: '60.625rem',
        270: '67.5rem',
        280: '70rem',
        292.5: '73.125rem',
      },
      maxHeight: {
        35: '8.75rem',
        70: '17.5rem',
        90: '22.5rem',
        550: '34.375rem',
        300: '18.75rem',
      },
      minWidth: {
        22.5: '5.625rem',
        42.5: '10.625rem',
        47.5: '11.875rem',
        75: '18.75rem',
      },
      minHeight: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        1055: '1055',
        1000: '1000',
        999: '999',
        100: '100',
        99: '99',
        20: '20',
        19: '19',
        18: '18',
        17: '17',
        16: '16',
        15: '15',
        14: '14',
        13: '13',
        12: '12',
        11: '11',
        9: '9',
        8: '8',
        7: '7',
        6: '6',
        5: '5',
        4: '4',
        3: '3',
        2: '2',
        1: '1',
      },
      opacity: {
        65: '.65',
      },
      backgroundImage: {
        video: "url('../images/video/video.png')",
      },
      content: {
        'icon-copy': 'url("../images/icon/icon-copy-alt.svg")',
      },
      backgroundColor: {
        "primary-light": "#D6D2F8",
        primary: {
          light: '#D6D2F8',
          DEFAULT: '#3C50E0',
          dark: '#180F69'
        },
        secondary: {
          light: '#ebedef',
          DEFAULT: '#9da5b1',
          dark: '#4b4f55'
        },
        success: {
          light: '#D5F1DE',
          DEFAULT: '#219653',
          dark: '#16582C'
        },
        danger: {
          light: '#FADDDD',
          DEFAULT: '#D34053',
          dark: '#6E2828'
        },
        warning: {
          light: '#FEEFD0',
          DEFAULT: '#FFA70B',
          dark: '#77550A'
        },
        info: {
          light: '#D6EBFF',
          DEFAULT: '#0DCAF0',
          dark: '#194A7A'
        },
        dark: {
          light: '#AEB7C0',
          DEFAULT: '#2f3845',
          dark: '#3f4145'
        },
        light: {
          light: '#fbfbfc',
          DEFAULT: '#ffffff',
          dark: '#717272'
        },
      },
      transitionProperty: {
        width: 'width',
        stroke: 'stroke',
      },
      transitionDuration: {

      },
      borderWidth: {
        1: '1px',
        2: '2px',
        6: '6px',
      },
      Interactivity: {
        1: '1px'
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher: '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      scale: {
        '85': '0.85',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: 0
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: 0
          },
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

}
