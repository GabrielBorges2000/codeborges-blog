import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/container";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<main>
			<Container>
				
				<article className="mb-32">
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
					/>
					<PostBody content={content} />
				</article>
			</Container>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title} `;

	return {
		title,
		openGraph: {
			title,
			images: [post.ogImage.url],
		},
		robots: 'index, follow',
	};
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}
