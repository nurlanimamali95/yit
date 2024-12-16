import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFC544",
				secondary: "#B3E6FF",
				accent: "#B2FFB2",
				dark: "#555555",
				white: "#FFFFFF",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(90deg, #FFFFFF 20%, #FFE5AF 54%, #B5E2FF 65%)",
			},
		},
	},
	plugins: [],
} satisfies Config;
