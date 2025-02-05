---
import { Image } from "astro:assets";

const { title, description, pubDate, updateDate, featuredImage, body, blocks } = Astro.props;
console.log(Astro.props);
---

<section class="blog-article-title">
	{title && <h1 class="blog-article-title__title">{title}</h1>}
	{description && <span class="blog-article-title__description">{description}</span>}
	{
		featuredImage && (
			<Image src={featuredImage} alt="TBD" layout="responsive" width={1330} height={750} />
		)
	}
</section>

<style>
	.blog-article-title {
		padding: 10% 0;
	}

	.blog-article-title__title {
		font-size: clamp(var(--font-size-6), 6vw, var(--font-size-11));
		font-weight: var(--font-weight-bold);
		color: var(--theme-text);
		line-height: 1;
		letter-spacing: -0.14rem;
	}

	.blog-article-title__description {
		font-size: clamp(var(--font-size-3), 6vw, var(--font-size-6));
		color: var(--theme-text-tint);
	}
</style>
