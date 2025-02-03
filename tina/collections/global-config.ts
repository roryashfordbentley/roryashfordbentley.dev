import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
	name: "config",
	label: "Config",
	path: "src/content/config",
	format: "json",
	ui: {
		global: true,
		allowedActions: {
			create: false,
			delete: false,
		},
	},
	fields: [
		{
			name: "siteTitle",
			label: "Site title",
			type: "string",
			required: true,
		},
		{
			name: "description",
			label: "Site description",
			type: "string",
			required: true,
		},
		{
			name: "siteAuthor",
			label: "Author name",
			required: true,
			type: "string",
			ui: {
				defaultValue: "Your name here",
			},
		},
		{
			name: "nav",
			label: "Site Navigation Menu (Reorder, Add, Remove)",
			type: "object",
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item.title,
					};
				},
			},
			fields: [
				{
					name: "title",
					label: "Title of Nav Item",
					type: "string",
					required: true,
				},
				{
					name: "link",
					label: "Path of the Nav Item",
					type: "string",
					required: true,
				},
			],
		},
		{
			name: "contactLinks",
			label: "Contact Links",
			type: "object",
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item.title,
					};
				},
			},
			fields: [
				{
					name: "title",
					label: "Title",
					type: "string",
				},
				{
					name: "link",
					label: "Link",
					type: "string",
				},
				{
					name: "icon",
					label: "Icon",
					type: "image",
				},
			],
		},

		// Add other config fields here...
	],
};
