import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);

	// Aqui, podemos adicionar as classes CSS necessárias para garantir a rolagem
	const htmlContent = result.toString();

	return htmlContent.replace(
		/<pre>/g,
		'<pre class="bg-[#272822] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto whitespace-pre">',
	);
}
