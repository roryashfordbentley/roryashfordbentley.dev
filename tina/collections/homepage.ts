import type { Collection } from "tinacms";

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
			name: "body",
			type: "rich-text",
			isBody: true,
			required: true,
		},
	],
};
