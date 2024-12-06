import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/components/post-title";
import type { Author } from "@/types/author";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className="hidden md:block md:mb-12 md:max-w-[70rem] mx-auto">
				<Avatar
					name={author.name || "Autor Desconhecido"}
					picture={author.picture}
				/>
			</div>
			<div className="max-w-4xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar
						name={author.name || "Autor Desconhecido"}
						picture={author.picture}
					/>
				</div>
				<div className="mb-6 text-lg">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	);
}
