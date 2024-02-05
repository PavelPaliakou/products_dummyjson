import ProductSection from '../components/product/productSection'
import { getAllProducts } from '@/lib/fetchData';
import SideBar from '@/components/navigation/sideNavBar';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
          <ProductSection products={products} />
    </>
  )
}
