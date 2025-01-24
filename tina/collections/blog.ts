import type { Collection } from "tinacms";
import { defineConfig } from "tinacms";
import type { Template } from "tinacms";

/**
 * Text Content Block
 */
const textContentBlock: Template = {
	name: "textContentBlock",
	label: "Text Content",
	ui: {
		defaultItem: () => {
			return {
				// The body will be populated with "Default Text"
				body: {
					type: "root",
					children: [
						{
							type: "p",
							children: [
								{
									type: "text",
									text: "Default Text",
								},
							],
						},
					],
				},
			};
		},
	},
	fields: [
		{
			type: "rich-text",
			name: "text",
			label: "Text",
		},
	],
};

/**
 * Big Image Content Block
 */
const bigImageBlock: Template = {
	name: "bigImageBlock",
	label: "Big Image",
	fields: [
		{
			type: "image",
			name: "image",
			label: "Image",
		},
		{
			type: "string",
			name: "altText",
			label: "Alt Text",
		},
	],
};

/**
 * Image Gallery Content Block
 */
const galleryBlock: Template = {
	name: "galleryBlock",
	label: "Gallery",
	fields: [
		{
			type: "image",
			name: "imageOne",
			label: "Image One",
		},
		{
			type: "string",
			name: "imageOneAltText",
			label: "Image One Alt Text",
		},
		{
			type: "image",
			name: "imageTwo",
			label: "Image Two",
		},
		{
			type: "string",
			name: "imageTwoAltText",
			label: "Image Two Alt Text",
		},
		{
			type: "image",
			name: "imageThree",
			label: "Image Three",
		},
		{
			type: "string",
			name: "imagethreeAltText",
			label: "Image Three Alt Text",
		},
	],
};

/**
 * Alert Content Block
 */
const alertBlock: Template = {
	name: "alertBlock",
	label: "Alert",
	fields: [
		{
			type: "string",
			name: "alertTitle",
			label: "Title",
		},
		{
			type: "rich-text",
			name: "alertContent",
			label: "Content",
		},
	],
};

/**
 * Alert Content Block
 */
const codeBlock: Template = {
	name: "codeBlock",
	label: "Code",
	fields: [
		{
			type: "string",
			name: "codeText",
			label: "Code text",
			ui: {
				component: "textarea",
			},
		},
	],
};

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
				textContentBlock,
				bigImageBlock,
				galleryBlock,
				alertBlock,
				codeBlock,
			],
		},
	],
};
