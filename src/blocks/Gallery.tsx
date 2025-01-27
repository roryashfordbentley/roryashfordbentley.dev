import type { Template } from "tinacms";

export const Gallery = ({ data, parentField = "" }) => {
	return <div className="gallery-here"></div>;
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { GalleryBlockSchema } from "@blocks/Gallery.tsx"
 */
export const GalleryBlockSchema: Template = {
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
