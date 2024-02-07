import CategoriesList from "./categoriesList";
import { getAllCategories } from '@/lib/fetchData';

export default async function SideNavBar (){
    const categories = await getAllCategories();

    return (
        <>
            <div className="flex flex-col items-center p-4 w-1/4 rounded-md bg-yellow-200">
                <h1 className="text-2xl font-bold">Categories</h1>
                <CategoriesList categories={categories}/>
            </div>
        </>
    )
}