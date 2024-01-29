import ProductSection from '../components/product/productSection'
import { getAllProducts } from '@/lib/fetchData';

export default async function Home() {
  const products = await getAllProducts();

  return (
      <ProductSection products = {products}/>
  )
}
