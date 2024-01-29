import NavLink from "./navLink"
import { getAllCategories } from "@/lib/fetchData";


export default async function CategoriesList (){
    const categories = await getAllCategories();

    return (
        <>
            {categories.map((category) => (
                <NavLink key={category} link={`/category/${category}`} linkName={category} />
            ))}
        </>
    )
}