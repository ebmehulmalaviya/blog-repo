import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Simple Blog',
  description: 'A beautiful and modern blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <main className="content-area">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
