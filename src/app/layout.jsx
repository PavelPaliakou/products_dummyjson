import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Header from './components/header'
import SideBar from './components/navigation/sideBar'

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
        <main className="grid grid-cols-4 p-4">
          <SideBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
