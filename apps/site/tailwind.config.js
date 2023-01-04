module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["system-ui"],
		},

		capsize: {
			metrics: {
				sans: require("@capsizecss/metrics/appleSystem"),
			},
		},

		extend: {
			colors: {
				header: "#6FA59C",
				orange: {
					main: "#F58C44"
				},
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@asyarb/tailwind-capsize"),
	],
}
