import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Code = ({ data, parentField = "" }) => {
	return <div className="code">{data.codeText}</div>;
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { CodeBlockSchema } from "@blocks/Code.tsx"
 */
export const CodeBlockSchema: Template = {
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
