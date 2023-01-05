module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["greycliff-cf", "system-ui"],
		},

		capsize: {
			metrics: {
				sans: {
					capHeight: 700,
					ascent: 1118,
					descent: -344,
					lineGap: 0,
					unitsPerEm: 1000,
					xHeight: 490,
				},
			},
		},

		extend: {
			colors: {
				header: "#6FA59C",
				orange: {
					main: "#F58C44",
				},
				yellow: {
					search: "#F9B740",
				},
				body: "#E5DED9",
			},
			fontSize: {
				15: "15px",
				20: "20px",
				22: "22px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@asyarb/tailwind-capsize"),
		require("tailwind-scrollbar-hide"),
	],
}
