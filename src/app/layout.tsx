import type { Metadata } from 'next';
import '../styles/globals.css';

import { Odibee_Sans, Poppins } from 'next/font/google';

const odibee = Odibee_Sans({
	weight: ['400'],
	subsets: ['latin'],
});

const poppins = Poppins({
	weight: ['200', '300', '400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Invest Quest',
	description: 'Divirta-se investindo!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${poppins.className}`}>{children}</body>
		</html>
	);
}
