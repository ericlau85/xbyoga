// app/layout.tsx
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { LanguageProvider } from '../lib/language-context'  // 新增这行

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          <title>Ashtanga Studio</title>
            <meta name="description" content="阿斯汤加瑜伽课程，传统Mysore练习，梵语课程，瑜伽哲学。线上课，体验传统阿斯汤加瑜伽。" />
            <meta name="keywords" content="阿斯汤加,瑜伽,线上课,瑜伽课程,瑜伽工作室,希波,Eric,Ashtanga,Yoga,Online class,Mysore,北京,上海,Beijing,Shanghai,Sanskrit,Yoga Sanskrit,梵语,瑜伽梵语" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        margin: 0,
        fontFamily: 'Futura, Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>
        <LanguageProvider>  {/* 用这个包装 */}
          <Navigation />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>  {/* 结束包装 */}
      </body>
    </html>
  )
}
