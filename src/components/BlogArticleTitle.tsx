export const BlogArticleTitle = (props) => {
	return (
		<section className={styles["blog-article-title"]}>
			{props.title && <h1 className={styles["blog-article-title__title"]}>{props.title}</h1>}
			{props.description && (
				<span className={styles["blog-article-title__description"]}>
					{props.description}
				</span>
			)}
			{props.featuredImage && (
				<img src={props.featuredImage} alt="TBD" width={1330} height={750} />
			)}
		</section>
	);
};
