import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: "Raleway",
				body: "Roboto",
			},
			colors: {
				primary: "#3D3474",
				"primary-80": "#584E8D",
				"primary-60": "#8C84B7",
				"primary-40": "#409DF9",
				"primary-20": "#92C9FF",
				"primary-light": "#DBEDFF",
				"title-color": "#333333",
				"body-color": "#666666",
				"in-field-color": "#999999",
				"disable-color": "#CCCCCC",
				white: "#ffffff",
				fill: "#8624A8",
				"light-blue": "#F7F7FC",
				orange: "#FF6715",
				"accent-green": "#43CC74",
				"accent-red": "#F7473E",
				"image-placeholder": "#EEEEEE",
			},
			backgroundImage: {
				heroBg: "url('/assets/img/bg/hero-bg.png')",
			},
		},
	},
	plugins: [],
};
export default config;
