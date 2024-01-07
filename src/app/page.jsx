import SideBar from './components/navigation/sideBar'
import ProductSection from './components/product/productSection'

export default function Home() {
  return (
    <main className="relative flex flex-row items-center justify-between p-24">
      <SideBar />
      <ProductSection />
    </main>
  )
}
