import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Products',
  description: 'Products dummyJSON app',
  author: "Pavel Paliakou",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 ${inter.className}`}>
        <Header />
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
