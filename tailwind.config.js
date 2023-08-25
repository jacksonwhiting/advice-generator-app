/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"canvas-pri": "#202733",
				"canvas-sec": "#313A48",
				"text-pri": "#CEE3E9",
				"accent-pri": "#53FFAA",
			},
			fontFamily: {
				fontPri: ["Manrope", "sans-serif"],
			},
			fontSize: {
				bodyS: ".75rem",
				bodyM: [
					".75rem",
					{
						letterSpacing: "2px",
					},
				],
				bodyL: [
					".875rem",
					{
						letterSpacing: "2px",
					},
				],
				hdgL: "1.125rem",
				hdgXl: [
					"1.625rem",
					{
						letterSpacing: "3.42px",
					},
				],
				bodyPri: ["18px", "26px"],
			},
		},
	},
	plugins: [],
}
