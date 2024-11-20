import markdownStyles from "./markdown-styles.module.css";

type Props = {
	content: string;
};

export function PostBody({ content }: Props) {
	return (
		<div className="max-w-4xl mx-auto">
			<div
				className={markdownStyles.markdown}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}
