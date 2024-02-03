import ProductSection from '../components/product/productSection'
import { getAllProducts } from '@/lib/fetchData';
import SideBar from '@/components/navigation/sideNavBar';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <SideBar />
        <div className="col-span-3">
          <ProductSection products={products} />
        </div>
      </div>
    </>
  )
}
