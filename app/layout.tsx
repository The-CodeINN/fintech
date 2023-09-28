import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Fintech Application',
  description: 'This is a fintech application built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mont.className}>{children}</body>
    </html>
  );
}
