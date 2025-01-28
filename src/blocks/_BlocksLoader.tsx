import React from "react";
import type { Blog, Page } from "@tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

import { TextContent } from "@blocks/TextContent.tsx";
import { BigImage } from "@blocks/BigImage.tsx";

/**
 * Case values must be equal to {CollectionName}{FieldName}{BlockTemplateName}
 *
 * In our Blog these values are {Blog}{Blocks}{BlockTemplateName}
 * Block Template Name is defined in tina/collections/blog.ts
 */

//const collectionName = "Blog";
const fieldName = "Blocks";

export const Blocks = (props: Blog | Page) => {
	return (
		<>
			{props.blocks
				? props.blocks.map(function (block, i) {
						switch (block.__typename) {
							case `${block.__typename}${fieldName}TextContentBlock`:
								return (
									<div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
										<TextContent data={block} parentField={`blocks.${i}`} />
									</div>
								);

							case `${block.__typename}${fieldName}BigImageBlock`:
								return (
									<div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
										<BigImage data={block} parentField={`blocks.${i}`} />
									</div>
								);

							default:
								return null;
						}
					})
				: null}
		</>
	);
};
