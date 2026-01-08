import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Mastery Program | Learn to Build AI Tools',
  description:
    'A 2-weekend AI education program teaching you to understand AI, build real applications, and use AI intentionally without becoming dependent on it.',
  keywords: [
    'AI education',
    'machine learning',
    'AI training',
    'programming bootcamp',
    'AI agents',
    'Python',
    'AI literacy',
  ],
  authors: [{ name: 'AI Mastery Program' }],
  openGraph: {
    title: 'AI Mastery Program | Learn to Build AI Tools',
    description:
      'Build tools that optimize your life — don't let AI use you. Join our 2-weekend intensive program.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
