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
				bodyS: [
					".6875rem",
					{
						letterSpacing: "3.46px",
					},
				],
				bodyL: [
					"1.5rem",
					{
						letterSpacing: "-.26px",
					},
				],
			},
			screens: {
				tablet: "572px",
			},
		},
	},
	plugins: [],
}
