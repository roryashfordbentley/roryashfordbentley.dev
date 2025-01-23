import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import type { BlogQuery, BlogQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import dateFormatter from "@scripts/date-formatter.js";

/**
 * This template is rendered isomorphically, both frontend and backend.
 * It uses data-tina-field={tinaField(FILED_NAME, "title")} to build relationships
 * within the CSM to see what you are editing
 */

type Props = {
	variables: BlogQueryVariables;
	data: BlogQuery;
	query: string;
};

export default function AdminBlogPost(props: Props) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	const blog = data.blog;

	return (
		<article>
			<figure
				data-tina-field={tinaField(blog, "heroImage")}
				className="hero-image"
			>
				{blog.heroImage && (
					<img
						width={1020}
						height={510}
						src={blog.heroImage}
						alt=""
					/>
				)}
			</figure>

			<h1 data-tina-field={tinaField(blog, "title")}>{blog.title}</h1>

			<div className="date" data-tina-field={tinaField(blog, "pubDate")}>
				{blog.pubDate && (
					<time
						className="card-article__date"
						dateTime={
							dateFormatter(blog.pubDate)
								.machineReadableDateString
						}
					>
						{dateFormatter(blog.pubDate).readableDateString}
					</time>
				)}

				{blog.updatedDate && (
					<div
						className="last-updated-on"
						data-tina-field={tinaField(blog, "updatedDate")}
					>
						Last updated on{" "}
						<FormattedDate date={blog.updatedDate} />
					</div>
				)}
			</div>

			<div data-tina-field={tinaField(blog, "body")}>
				<TinaMarkdown content={blog.body} />
			</div>
		</article>
	);
}
