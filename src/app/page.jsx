import SideBar from './components/navigation/sideBar'
import ProductSection from './components/product/productSection'

export default function Home() {
  return (
    <main className="grid grid-cols-4 p-4">
      <SideBar />
      <ProductSection />
    </main>
  )
}
