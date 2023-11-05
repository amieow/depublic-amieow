module.exports = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{js,jsx,tsx}",
		"./app/**/*.{js,jsx,tsx}",
		"./src/**/*.{js,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "30px",
			screens: {
				sm: "575px",
			},
		},
		fontFamily: {
			monsterat: "var(--font-monsterat)",
		},
		extend: {
			colors: {
				primary: {
					50: "#F5F0F6",
					100: "#ECCDF6",
					200: "#E0ABF0",
					300: "#D081E9",
					500: "#A103D3",
					700: "#6B028D",
					900: "#360146",
				},
				secondary: {
					50: "#FBF6EC",
					100: "#FFF0CC",
					200: "#FFD980",
					300: "#FFCD55",
					500: "#FFB400",
					700: "#D49600",
					900: "#805A00",
				},
				tertiary: {
					100: "#EEEEEE",
					200: "#DADADA",
					300: "#A6A6A6",
					500: "#4D4D4D",
					700: "#1F1F1F",
					900: "#000000",
				},
				neutral: {
					100: "#EEEEEE",
					200: "#DADADA",
					300: "#A6A6A6",
					500: "#4D4D4D",
					700: "#1F1F1F",
					900: "#000000",
				},
				surface: {
					100: "#FFF",
					200: "#FAFAFA",
					300: "#FCF9F2",
					500: "#FDF9F0",
					700: "#FCF6E8",
					900: "#FEF6E5",
				},
				success: {
					50: "#EAF2E2",
					100: "#EBFCD8",
					200: "#D3FAB2",
					300: "#B1F188",
					500: "#60D13A",
					700: "#2A961D",
					900: "#0B640D",
				},
				info: {
					100: "#E0E4FF",
					200: "#C2C9FF",
					300: "#A4ADFF",
					500: "#6875FF",
					700: "#343DB7",
					900: "#13197A",
				},
				warning: {
					100: "#FEFBCC",
					200: "#FEF69A",
					300: "#FEF068",
					500: "#FCDF05",
					700: "#B59C02",
					900: "#786400",
				},
				danger: {
					100: "#FFE6D6",
					200: "#FFC7AD",
					300: "#FFA283",
					500: "#FF4332",
					700: "#B71926",
					900: "#7A0925",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
