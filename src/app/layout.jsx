import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Products',
  description: 'Products dummyJSON app',
  author: "Pavel Paliakou",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
