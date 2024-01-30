import CategoriesList from "./categoriesList";
import { getAllCategories } from '@/lib/fetchData';

export default async function SideBar (){
    const categories = await getAllCategories();

    return (
        <>
            <div className="flex flex-col items-center p-4 bg-yellow-200">
                <h1 className="text-2xl font-bold">Categories</h1>
                <CategoriesList categories={categories}/>
            </div>
        </>
    )
}