/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
		  {
			loihi: {
			  primary: "#195565",
			  secondary: "#567039",
			  accent: "#2BA0C5",
			  neutral: "#9FC5C8",
			  "base-100": "#ffffff",
			},
		  },
		  "dark",
		  "cupcake",
		],
	  },
	theme: {
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '2px',
			widest: '3px',
		  },
		extend: {
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			  },
			colors: {
				'cotton': '#F5F3F1',
				'lt_brown':'#EFEDEA',
			  },
			backgroundImage: {
				'house': "url('src/assets/images/house.jpg')",
				'pool': "url('src/assets/images/pool.jpg')",
				'golf': "url('src/assets/images/golf.jpg')",
				'draw': "url('src/assets/images/draw.jpg')",
				'dot': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('src/assets/images/dot.webp')",
				'palm': "url('src/assets/images/palm-bg.jpg')",
			  },
			  fontFamily: {
				'title': ['ivypresto-headline', 'serif'],
				'sans': ['Poppins', 'sans-serif'],
			  },
		},
	},
	corePlugins: {
		aspectRatio: false,
	  },
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require("daisyui"),
	],
}
