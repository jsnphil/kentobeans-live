import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { Geist_Mono, Maven_Pro } from 'next/font/google';
import Navigation from '../components/Navigation';
import './globals.css';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin']
// });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const mavenPro = Maven_Pro({
  variable: '--font-maven-pro',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Kentobeans Live - Music Streaming Viewer',
  description:
    "Live song requests, SOTN tracking, and community features for Kentobeans7's music streams"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang='en'>
      <body
        className={`${mavenPro.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className='flex-1'>{children}</main>
        <footer className='bg-kento-dark-blue text-white py-8 mt-auto'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <p className='text-sm text-gray-300'>© {year} Kentobeans Live.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
