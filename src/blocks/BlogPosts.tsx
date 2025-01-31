import type { Template } from "tinacms";
import { BlogGrid } from "@components/BlogGrid.tsx";
import client from "@tina/__generated__/client";

async function getPosts() {
	const blogRequest = await client.queries.blogConnection();

	const posts = blogRequest.data.blogConnection.edges.map((post) => {
		return {
			id: post?.node?.id,
			title: post?.node?.title,
			description: post?.node?.description,
			pubDate: post?.node?.pubDate,
			updateDate: post?.node?.updatedDate,
			heroImage: post?.node?.heroImage,
			blocks: post?.node?.blocks,
		};
	});

	console.log(posts);

	//return posts;
	return posts;
}

export const BlogPosts = ({ data, parentField = "" }) => {
	const posts = await getPosts();

	return (
		<section className="blog-posts">
			<BlogGrid>
				<h2>Blog posts:</h2>
				{/*featuredPost && (
					<CardArticleFeatured
						title={featuredPost.data.title}
						description={featuredPost.data.description}
						date={featuredPost.data.pubDate}
						url={`/blog/${featuredPost.id}/`}
					/>
				)*/}
				{posts.map((post) => (
					<div>
						title={post.data.title}
						description={post.data.description}
						date={post.data.pubDate}
						url={`/blog/${post.id}/`}
					</div>
				))}
			</BlogGrid>
		</section>
	);
};

/**
 * Block Schema Template
 *
 * This should be added to the appropriate collection. e.g. @tina/collections/blog.ts
 *
 * import { BlogPostsBlockSchema } from "@blocks/BlogPosts.tsx"
 */
export const BlogPostsBlockSchema: Template = {
	name: "blogPostsBlock",
	label: "Blog Posts",
	fields: [
		{
			type: "string",
			name: "blogPostsTitle",
			label: "Title (optional)",
		},
		{
			type: "number",
			name: "blogPostsCount",
			label: "Number of posts to display",
		},
		{
			type: "boolean",
			name: "blogPostsIncludeFeatured",
			label: "Include featured posts?",
		},
	],
};
