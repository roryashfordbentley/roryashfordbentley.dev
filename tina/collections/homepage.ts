import type { Collection } from "tinacms";

import { PageTitleBlockSchema } from "@blocks/PageTitle";
import { BigImageBlockSchema } from "@blocks/BigImage";
import { TextContentBlockSchema } from "@blocks/TextContent";
import { GalleryBlockSchema } from "@blocks/Gallery";
import { AlertBlockSchema } from "@blocks/Alert";
import { CodeBlockSchema } from "@blocks/Code";

export const HomePageCollection: Collection = {
	name: "homepage",
	label: "Home Page",
	path: "src/content/homepage",
	format: "mdx",
	ui: {
		router: ({ document }) => {
			/*return `/${document._sys.filename}`;*/
			return `/`;
		},
		allowedActions: {
			create: false,
			delete: false,
		},
	},
	fields: [
		{
			name: "Title",
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
				TextContentBlockSchema,
				BigImageBlockSchema,
				//GalleryBlockSchema,
				//AlertBlockSchema,
				//CodeBlockSchema,
			],
		},
	],
};
