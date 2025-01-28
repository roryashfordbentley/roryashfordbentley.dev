import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import "@blocks/PageTitle.css";

export const PageTitle = ({ data, parentField = "" }) => {
	return (
		<section className="page-title">
			<div className="page-title__content">
				<div data-tina-field={tinaField(data, "title")}>
					<h1 className="page-title__title">
						<TinaMarkdown content={data.title} />
					</h1>
				</div>

				<div data-tina-field={tinaField(data, "subtitle")}>
					<span className="page-title__subtitle">
						<TinaMarkdown content={data.subtitle} />
					</span>
				</div>
			</div>
		</section>
	);
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { PageTitleBlockSchema } from "@blocks/PageTitle.tsx"
 */
export const PageTitleBlockSchema: Template = {
	name: "pageTitleBlock",
	label: "Page title",
	fields: [
		{
			type: "rich-text",
			name: "title",
			label: "Title",
		},
		{
			type: "rich-text",
			name: "subtitle",
			label: "Subtitle",
		},
	],
};
