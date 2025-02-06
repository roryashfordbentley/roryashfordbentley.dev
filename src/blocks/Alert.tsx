import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Alert = ({ data, parentField = "" }) => {
	return (
		<div className="alert">
			<TinaMarkdown content={data.alertContent} />
		</div>
	);
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { AlertBlock } from "@blocks/Alert.tsx"
 */
export const AlertBlockSchema: Template = {
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
