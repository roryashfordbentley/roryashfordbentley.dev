import React from "react";
import type { Blog, Page, Homepage } from "@tina/__generated__/types";

import { PageTitle } from "@blocks/PageTitle.tsx";
import { AboutMe } from "@blocks/AboutMe.tsx";
import { TextContent } from "@blocks/TextContent.tsx";
import { BigImage } from "@blocks/BigImage.tsx";

/**
 * Case values must be equal to {CollectionName}{FieldName}{BlockTemplateName}
 *
 * In our Blog these values are {Blog}{Blocks}{BlockTemplateName}
 * Block Template Name is defined in tina/collections/blog.ts within the template definition.
 *
 * Please be aware that the BlockTemplateName is defined in the Template definition and is not the exported component variable.
 *
 * These values eare capitalised
 * e.g. collection name = 'page' in the definition but is called as 'Page'
 */

//const collectionName = "blog";
const fieldName = "Blocks";

export const Blocks = (props: Blog | Homepage) => {
	const collectionName = props.__typename;

	return (
		<>
			{props.blocks
				? props.blocks.map(function (block, i) {
						switch (block.__typename) {
							/**
							 * The Page Title block Component
							 */
							case `${collectionName}${fieldName}PageTitleBlock`:
								return (
									<div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
										<PageTitle data={block} parentField={`blocks.${i}`} />
									</div>
								);

							/**
							 * The About Me block Component
							 */
							case `${collectionName}${fieldName}AboutMeBlock`:
								return (
									<div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
										<AboutMe data={block} parentField={`blocks.${i}`} />
									</div>
								);

							/**
							 * The Text Content block Component
							 */
							case `${collectionName}${fieldName}TextContentBlock`:
								return (
									<div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
										<TextContent data={block} parentField={`blocks.${i}`} />
									</div>
								);

							/**
							 * The Big Image block component
							 */
							case `${collectionName}${fieldName}BigImageBlock`:
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
