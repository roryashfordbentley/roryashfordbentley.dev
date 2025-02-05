import type { Template } from "tinacms";

export const BigImage = ({ data, parentField = "" }) => {
	return (
		<figure className={styles["big-image"]}>
			<img src={data.image} alt={data.altText} />
		</figure>
	);
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { bigImageBlock } from "@blocks/bigImage.tsx"
 */
export const BigImageBlockSchema: Template = {
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
