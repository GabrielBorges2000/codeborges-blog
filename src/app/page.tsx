import Container from "@/components/container";
import { MoreStories } from "@/components/more-stories";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";

export default function Index() {
	const allPosts = getAllPosts();

	return (
		<main>
			<Container>
				<Image
					src="/assets/banner.png"
					alt="Banner codeborges"
					className="shadow-sm w-full md:h-[60vh] object-cover rounded-lg mb-24"
					width={1300}
					height={400}
					quality={100}
				/>
				{allPosts.length > 0 && <MoreStories posts={allPosts} />}
			</Container>
		</main>
	);
}
