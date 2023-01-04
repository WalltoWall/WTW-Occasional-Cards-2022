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

		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@asyarb/tailwind-capsize"),
	],
}
