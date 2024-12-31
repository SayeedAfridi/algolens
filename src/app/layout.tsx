import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const sofia = Rubik({
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Algolens',
  description: 'The program to visualise algorithms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark' lang='en'>
      <body className={`${sofia.variable} antialiased`}>{children}</body>
    </html>
  );
}
