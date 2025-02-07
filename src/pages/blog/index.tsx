import Head from "next/head";
import config from "@content/config/config.json";

import PageLayout from "@layouts/PageLayout";
import client from "@tina/__generated__/client";
import { BlocksLoader } from "@blocks/_BlocksLoader";

import { BlogGrid, BlogGridItem } from "@components/BlogGrid/BlogGrid";
import { CardArticle } from "@components/CardArticle/CardArticle";
import { GridLayout } from "@components/GridLayout/GridLayout";
import { GridLayoutItem } from "@components/GridLayout/GridLayout";

const data = await client.queries.blogConnection();

const posts = data.data.blogConnection.edges.map((post) => {
	return post.node;
});

const Blog = () => {
	return (
		<PageLayout>
			<Head>
				<title>{`Blog - ${config.siteTitle}`}</title>
			</Head>
			<BlocksLoader {...data} />

			<GridLayout>
				<GridLayoutItem>
					<BlogGrid>
						{posts.map((post, i) => (
							<BlogGridItem key={`blogGrid.${i}`}>
								<CardArticle
									imageSrc={post.featuredImage}
									imageAlt="alt txt"
									title={post.title}
									description={post.description}
									date={post.pubDate}
									url={`/blog/${post.id}/`}
								/>
							</BlogGridItem>
						))}
					</BlogGrid>
				</GridLayoutItem>
			</GridLayout>
		</PageLayout>
	);
};

export default Blog;
