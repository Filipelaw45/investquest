import type { Metadata } from 'next';
import '../styles/globals.css';

import { Odibee_Sans, Poppins } from 'next/font/google';

// Configura as fontes
const odibee = Odibee_Sans({
  weight: ['400'], // Configure os pesos desejados
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '700'], // Configure os pesos desejados
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
      <body className={`${odibee.className}`}>{children}</body>
    </html>
  );
}
