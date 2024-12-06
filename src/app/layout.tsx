import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import Script from 'next/script';

import "./globals.css";
import Header from "@/components/header";
import { GoogleAdsense } from "@/components/google-adsese";

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
				<GoogleAdsense publicId={process.env.NEXT_PUBLIC_ADSENSE_KEY}/>
			</body>
		</html>
	);
}
