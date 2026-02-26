import type { Metadata } from 'next';
import { Big_Shoulders, Lexend } from 'next/font/google';
import './globals.css';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-big-shoulders',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: '3-column-preview-card-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${lexend.variable}`}>
      <body
        className="antialiased bg-gray-100 w-full min-h-[1502px] flex justify-center items-center
      md:min-h-[1350px] xl:min-h-screen">
        {children}
      </body>
    </html>
  );
}
