import { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Kentobeans Live',
  description: 'Home for Kentobeans7 Drum Streams',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
