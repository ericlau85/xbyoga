import './globals.css';
import { LanguageProvider } from '../lib/language-context';

export const metadata = {
  title: 'Ashtanga Studio',
  description: '希波的阿斯汤加瑜伽线上课，提供传统迈索尔课程和梵语学习',
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
      <body style={{
        margin: 0,
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <LanguageProvider> {/* 添加这一行 */}
          {children}
        </LanguageProvider> {/* 添加这一行 */}
      </body>
    </html>
  );
}
