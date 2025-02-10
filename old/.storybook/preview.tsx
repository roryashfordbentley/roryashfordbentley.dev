import type { Preview } from "@storybook/react";

import "@styles/tokens/colours.css";
import "@styles/tokens/fonts.css";
import "@styles/tokens/spacing.css";
import "@styles/tokens/media-queries.css";
import "@styles/tokens/border-radius.css";
import "@styles/tokens/utility.css";

import "@styles/reset.css";
import "@styles/global.css";
import "@styles/typography.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={inter.className}>
				<Story />
			</div>
		),
	],
};

export default preview;
