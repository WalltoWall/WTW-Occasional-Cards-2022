module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"next",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["react", "react-hooks", "@typescript-eslint"],
	rules: {
		"no-console": ["warn", { allow: ["info", "warn", "error"] }],
		"no-debugger": "warn",
		"no-undef": "off",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],

		"react/prop-types": "off",
		"react/no-unescaped-entities": "off",

		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
}
