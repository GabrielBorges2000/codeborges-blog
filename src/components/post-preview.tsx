import type { Author } from "@/types/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

export function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) {
	return (
		<div className="border border-zinc-200 rounded-lg p-4">
			<div className="mb-5">
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className="text-2xl mb-3 leading-snug">
				<Link href={`/posts/${slug}`} className="hover:underline">
					{title}
				</Link>
			</h3>
			<div className="text-md mb-4">
				<DateFormatter dateString={date} />
			</div>
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			<Avatar name={author.name} picture={author.picture} />
		</div>
	);
}
