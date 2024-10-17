const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A',
        'primary-foreground': '#F8FAFC',
        'background': '#FFFFFF',
        'foreground': '#020617',
        'muted-foreground': '#64748B',
        'muted': '#F1F5F9',
        'border': '#F1F5F9',
        'popover': '#FFFFFF',
        'accent': '#F1F5F9',
        'accent-foreground': '#0F172A',
        
        //Jarvis Colors
        'jarvis-0.5': '#F0F8FF',
        'jarvis-1': '#E0EFFE',
        'jarvis-2': '#B9E0FE',
        'jarvis-3': '#7CC7FD',
        'jarvis-4': '#36ACFA',
        'jarvis-5': '#0C91EB',
        'jarvis-6': '#0078D4',
        'jarvis-7': '#005597',
        'jarvis-8': '#004578',
        'jarvis-9': '#00325A',
        'jarvis-9.5': '#00213B',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  //plugins: [require("tailwindcss-animate")]
}

