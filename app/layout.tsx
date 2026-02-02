// app/layout.jsx
import './globals.css';
import { LanguageProvider } from '../lib/language-context';

export const metadata = {
  title: 'XBYOGA',
  description: 'XBYOGA Online Classes. Offering traditional Mysore-style courses for global practitioners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="msvalidate.01" content="A7D7A61D8BE6370E31BF3581BC0D5499" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="relative">
        {/* 右侧竖线 */}
        <div
          className="fixed top-0 bottom-0 w-px bg-gray-800/20 z-40 pointer-events-none md:right-[360px] right-12" />
        
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
