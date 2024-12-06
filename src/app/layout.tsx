import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import Script from 'next/script';

import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Codeborges",
		default: "Codeborges",
	},
	description:
		"Blog sobre tecnologia, programação e desenvolvimento web, mobile, desktop, AI e Backend!",
	openGraph: {
		images: ["*"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={cn(inter.className)}>
				<Header />
				<div className="min-h-screen">{children}</div>
				<Footer />
				 <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3323636009394692" crossOrigin="anonymous" />
			</body>
		</html>
	);
}
