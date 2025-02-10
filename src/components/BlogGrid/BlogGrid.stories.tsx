import type { Meta, StoryObj } from "@storybook/react";

import { BlogGrid } from "./BlogGrid";
import { CardArticle } from "@components/CardArticle/CardArticle";
import { Core as CoreCard } from "@components/CardArticle/CardArticle.stories";

import { Blog } from "@tina/__generated__/types";

type Story = StoryObj<typeof meta>;

const meta = {
	title: "Components/BlogGrid",
	component: BlogGrid,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof BlogGrid>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Core: Story = {
	args: {
		children: Array(9).fill(<CardArticle {...CoreCard.args} />),
	},
};
