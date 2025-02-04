import React from "react";
import type { Homepage, Page, Blog } from "@tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { PageTitle } from "@blocks/PageTitle";
import { AboutMe } from "@blocks/AboutMe";
import { TextContent } from "@blocks/TextContent";
import { BigImage } from "@blocks/BigImage";
import { GridLayout, GridLayoutItem } from "@components/GridLayout";

/**
 * Case values must be equal to {CollectionName}{FieldName}{BlockTemplateName}
 *
 * In our Blog these values are {Blog}{Blocks}{BlockTemplateName}
 * Block Template Name is defined in tina/collections/blog.ts within the template definition.
 *
 * Please be aware that the BlockTemplateName is defined in the Template definition and is not the
 * exported component variable.
 *
 * These values eare capitalised
 * e.g. collection name = 'page' in the definition but is called as 'Page'
 */

/**
 * Blocks component
 *
 * Blocks loops through the block types and if found on the page, renders them within a Grid Layout.
 * Important: when new blocks are registered they must be manually added to the below function.
 *
 * There are discussions around an official block loader for TinaCMS which will replace this in the
 * future.
 *
 * @param props
 * @returns
 */
export const Blocks = (props: Blog | Page | Homepage) => {
	const collectionName = props.__typename;
	const fieldName = "Blocks";

	return (
		<GridLayout>
			{props.blocks?.map(function (block, i) {
				console.log(block?.__typename);
				/**
				 * The Page Title block Component
				 */
				if (block?.__typename == `${collectionName}${fieldName}PageTitleBlock`) {
					return (
						<GridLayoutItem key={i + block.__typename}>
							<PageTitle data={block} parentField={`blocks.${i}`} />
						</GridLayoutItem>
					);
				}

				/**
				 * The About Me block Component
				 */
				if (block?.__typename == `${collectionName}${fieldName}AboutMeBlock`) {
					return (
						<GridLayoutItem layout="full" key={i + block.__typename}>
							<AboutMe data={block} parentField={`blocks.${i}`} />
						</GridLayoutItem>
					);
				}

				/**
				 * The Text Content block Component
				 */
				if (block?.__typename == `${collectionName}${fieldName}TextContentBlock`) {
					return (
						<GridLayoutItem key={i + block.__typename}>
							<TextContent data={block} parentField={`blocks.${i}`} />
						</GridLayoutItem>
					);
				}

				/**
				 * The Big Image block component
				 */
				if (block?.__typename == `${collectionName}${fieldName}BigImageBlock`) {
					return (
						<GridLayoutItem layout="full" key={i + block.__typename}>
							<BigImage data={block} parentField={`blocks.${i}`} />
						</GridLayoutItem>
					);
				}
			})}
		</GridLayout>
	);
};

/**
 * BlocksLoader
 *
 * Functional component required for using the useTina react hook.
 *
 * @param props
 * @returns
 */

/**
 *
 * @param props BLocksLoader
 *
 * This functional component facilitates the use of the react hook useTina which allows us to
 * query the Tina collections and render the <Blocks> component.
 * @returns
 */
export const BlocksLoader = (props: { query: string; variables: object; data: object }) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	/**
	 * Grab the data for the blocks without resolving the collection name key (e.g. homepage).
	 */
	const pageData = Object.values(data)[0];

	return <Blocks {...pageData} />;
};
