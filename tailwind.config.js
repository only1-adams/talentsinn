/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				custom: " 'Montserrat', sans-serif",
			},
			colors: {
				primary: "#FA1011",
				textColor: "#262836",
			},
		},
	},
	plugins: [],
};
