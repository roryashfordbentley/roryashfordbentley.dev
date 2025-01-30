import type { Collection } from "tinacms";

import { PageTitleBlockSchema } from "@blocks/PageTitle";
import { AboutMeBlockSchema } from "@blocks/AboutMe";
import { BigImageBlockSchema } from "@blocks/BigImage";
import { TextContentBlockSchema } from "@blocks/TextContent";

export const PageCollection: Collection = {
	name: "page",
	label: "Pages",
	path: "src/content/page",
	format: "mdx",
	ui: {
		filename: {
			// if disabled, the editor can not edit the filename
			readonly: true,
			// Example of using a custom slugify function
			slugify: (values) => {
				// Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
				return values?.title?.toLowerCase().replace(/ /g, "-");
			},
		},
		router: ({ document }) => {
			return `${document._sys.filename}`;
		},
	},
	fields: [
		{
			name: "title",
			label: "Title",
			type: "string",
			required: true,
		},
		{
			type: "object",
			list: true,
			name: "blocks",
			label: "Blocks",
			ui: {
				visualSelector: true,
			},
			templates: [
				PageTitleBlockSchema,
				AboutMeBlockSchema,
				TextContentBlockSchema,
				BigImageBlockSchema,
			],
		},
	],
};
