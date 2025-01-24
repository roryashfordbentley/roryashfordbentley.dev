import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const TextContent = ({ data, parentField = "" }) => {
	return <TinaMarkdown content={data.text} />;
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { TextContentBlock } from "@blocks/TextContent.tsx"
 */
export const TextContentBlockSchema: Template = {
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
