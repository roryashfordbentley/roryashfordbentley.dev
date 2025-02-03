import React from "react";
import type { Blog, Page, Homepage } from "@tina/__generated__/types";

import { PageTitle } from "@blocks/PageTitle";
import { AboutMe } from "@blocks/AboutMe";
import { TextContent } from "@blocks/TextContent";
import { BigImage } from "@blocks/BigImage";
import { GridLayout, GridLayoutItem } from "@components/GridLayout";
import BlogPosts from "@blocks/BlogPosts";

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
		<GridLayout>
			{props.blocks
				? props.blocks.map(function (block, i) {
						switch (block.__typename) {
							/**
							 * The Page Title block Component
							 */
							case `${collectionName}${fieldName}PageTitleBlock`:
								return (
									<GridLayoutItem key={i + block.__typename}>
										<div data-tinafield={`blocks.${i}`}>
											<PageTitle data={block} parentField={`blocks.${i}`} />
										</div>
									</GridLayoutItem>
								);

							/**
							 * The About Me block Component
							 */
							case `${collectionName}${fieldName}AboutMeBlock`:
								return (
									<GridLayoutItem layout="full" key={i + block.__typename}>
										<div data-tinafield={`blocks.${i}`}>
											<AboutMe data={block} parentField={`blocks.${i}`} />
										</div>
									</GridLayoutItem>
								);

							/**
							 * The Text Content block Component
							 */
							case `${collectionName}${fieldName}TextContentBlock`:
								return (
									<GridLayoutItem key={i + block.__typename}>
										<div data-tinafield={`blocks.${i}`}>
											<TextContent data={block} parentField={`blocks.${i}`} />
										</div>
									</GridLayoutItem>
								);

							/**
							 * The Big Image block component
							 */
							case `${collectionName}${fieldName}BigImageBlock`:
								return (
									<GridLayoutItem key={i + block.__typename}>
										<div data-tinafield={`blocks.${i}`}>
											<BigImage data={block} parentField={`blocks.${i}`} />
										</div>
									</GridLayoutItem>
								);

							/**
							 * The BlogPosts block component
							 */
							case `${collectionName}${fieldName}BlogPostsBlock`:
								return (
									<GridLayoutItem key={i + block.__typename}>
										<div data-tinafield={`blocks.${i}`}>
											<BlogPosts data={block} parentField={`blocks.${i}`} />
										</div>
									</GridLayoutItem>
								);

							default:
								return null;
						}
					})
				: null}
		</GridLayout>
	);
};
