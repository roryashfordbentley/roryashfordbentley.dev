import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

export const TextContent = ({ data, parentField = "" }) => {
	return (
		<div className="big-text-block" data-tina-field={tinaField(data, "text")}>
			<TinaMarkdown content={data.text} />
		</div>
	);
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { TextContent } from "@blocks/TextContent.tsx"
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
