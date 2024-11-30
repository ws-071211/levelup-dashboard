import { notoSansKR } from '@/ui/fonts';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Dashboard',
		default: 'Dashboard',
	},
	description: 'levelup Dashboard',
	metadataBase: new URL(
		'https://dashboard.levelup.vercel.app',
	),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${notoSansKR.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
