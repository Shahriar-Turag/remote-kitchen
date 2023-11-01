'use client';
import { siteConfig } from '@/config/siteConfig';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Providers } from './provider';

const fontRoboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700'],
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			className={fontRoboto.variable}
			lang='en'
			suppressHydrationWarning
		>
			<head />

			<body className={'min-h-screen bg-background antialiased'}>
				<Providers>{children} </Providers>
			</body>
		</html>
	);
}
