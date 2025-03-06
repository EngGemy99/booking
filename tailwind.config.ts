import type { Config } from "tailwindcss";

const createClampUtility = (property: string) => (value: string) => {
  const values = value.split(",");
  if (values.length === 3) {
    const [min, val, max] = values.map((v) => v.trim());
    return {
      [property]: `clamp(${min}, ${val}, ${max})`,
    };
  }
  return {};
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Wrapper/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9C25A0",
        secondary: "#2D63CF",
        text: "#224A9A",
        grayText: "#667085",
        darkText: "#040A38",
        error: "#E91223",
      },
      spacing: {
        "6": "6px",
        "10": "10px",
        "12": "12px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "72": "72px",
        "250": "250px",
      },
      fontSize: {
        "22": "22px",
        "12": "12px",
      },
    },
  },
  plugins: [
    // Clamp utilities for fontSize, lineHeight, width, and height
    function ({ matchUtilities }: { matchUtilities: any }) {
      const clampUtilities = {
        "text-clamp": createClampUtility("fontSize"),
      };
      matchUtilities(clampUtilities, {
        values: {},
        type: "any",
      });
    },
  ],
};
export default config;
