import React, { useEffect, useState } from "react";
import client from "@tina/__generated__/client";

type BlogPost = {
	id: string;
	title: string;
	description: string;
	pubDate: string;
};

const BlogPosts: React.FC<{ initialPosts: BlogPost[] }> = ({ initialPosts }) => {
	const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await client.queries.blogConnection();
				const blogPosts = response.data.blogConnection.edges.map((edge: any) => ({
					id: edge.node.id,
					title: edge.node.title,
					description: edge.node.description,
					pubDate: edge.node.pubDate,
				}));
				setPosts(blogPosts);
			} catch (err) {
				setError("Failed to fetch blog posts.");
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (posts.length === 0) {
		console.log(posts);
		return <div>Loading...</div>;
	}

	return (
		<section className="blog-posts">
			<h2>Blog Posts</h2>
			<div className="blog-grid">
				{posts.map((post) => (
					<div key={post.id} className="blog-card">
						<h3>{post.title}</h3>
						<p>{post.description}</p>
						<time dateTime={post.pubDate}>
							{new Date(post.pubDate).toLocaleDateString()}
						</time>
						<a href={`/blog/${post.id}`}>Read More</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogPosts;

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
