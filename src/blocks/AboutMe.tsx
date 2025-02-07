import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

import styles from "@blocks/AboutMe.module.css";
import { ContactWidget } from "@components/ContactWidget/ContactWidget";

export const AboutMe = ({ data, parentField = "" }) => {
	return (
		<section className={styles["about-me"]}>
			<div className={styles["about-me__inner"]}>
				<figure
					data-tina-field={tinaField(data, "aboutImage")}
					className={styles["about-me__figure"]}
				>
					<img
						className={styles["about-me__image"]}
						src={data.aboutImage}
						alt={data.aboutImageAltText}
						width=""
						height=""
					/>
				</figure>
				<div className={styles["about-me__content"]}>
					<h2
						data-tina-field={tinaField(data, "aboutTitle")}
						className={styles["about-me__title"]}
					>
						{data.aboutTitle}
					</h2>

					<div
						data-tina-field={tinaField(data, "aboutDescription")}
						className={styles["about-me__description"]}
					>
						<TinaMarkdown content={data.aboutDescription} />
					</div>

					<footer className={styles["about-me__footer"]}>
						<ContactWidget />
					</footer>
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
export const AboutMeBlockSchema: Template = {
	name: "aboutMeBlock",
	label: "About Me",
	fields: [
		{
			type: "string",
			name: "aboutTitle",
			label: "Title",
		},
		{
			type: "rich-text",
			name: "aboutDescription",
			label: "Description",
		},
		{
			type: "image",
			name: "aboutImage",
			label: "Image",
		},
		{
			type: "string",
			name: "aboutImageAltText",
			label: "Alt Text",
		},
	],
};
