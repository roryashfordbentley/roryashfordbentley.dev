import Head from "next/head";
import PageLayout from "@layouts/PageLayout";

import { BlogGrid, BlogGridItem } from "@components/BlogGrid/BlogGrid";
import { CardArticle } from "@components/CardArticle/CardArticle";
import { GridLayout } from "@components/GridLayout/GridLayout";
import { GridLayoutItem } from "@components/GridLayout/GridLayout";

const Blog = () => {
	return (
		<PageLayout>
			<Head>
				<title>Blog</title>
			</Head>

			<GridLayout>
				<GridLayoutItem>
					<BlogGrid>
						<BlogGridItem>
							<CardArticle
								imageSrc=""
								imageAlt="alt txt"
								title=""
								description=""
								date=""
								url=""
							/>
						</BlogGridItem>
					</BlogGrid>
				</GridLayoutItem>
			</GridLayout>
		</PageLayout>
	);
};

export default Blog;
