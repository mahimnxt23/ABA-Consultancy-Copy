/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
