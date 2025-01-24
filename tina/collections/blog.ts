import type { Collection } from "tinacms";
import { defineConfig } from "tinacms";
import type { Template } from "tinacms";

import { BigImageBlockSchema } from "@blocks/BigImage";
import { TextContentBlockSchema } from "@blocks/TextContent";
import { GalleryBlockSchema } from "@blocks/Gallery";
import { AlertBlockSchema } from "@blocks/Alert";
import { CodeBlockSchema } from "@blocks/Code";

export const BlogCollection: Collection = {
	name: "blog",
	label: "Blogs",
	path: "src/content/blog",
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
		router({ document }) {
			return `/blog/${document._sys.filename}`;
		},
	},
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
		},
		{
			name: "description",
			label: "Description",
			type: "string",
			ui: {
				component: "textarea",
			},
		},
		{
			name: "pubDate",
			label: "Publication Date",
			type: "datetime",
		},
		{
			name: "updatedDate",
			label: "Updated Date",
			type: "datetime",
		},
		{
			name: "heroImage",
			label: "Hero Image",
			type: "image",
		},
		{
			type: "rich-text",
			name: "body",
			label: "Body",
			isBody: true,
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
				TextContentBlockSchema,
				BigImageBlockSchema,
				GalleryBlockSchema,
				AlertBlockSchema,
				CodeBlockSchema,
			],
		},
	],
};
