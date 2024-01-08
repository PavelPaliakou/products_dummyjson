import NavLink from "./navLink"

async function getCategories() {
    const categoriesData = await fetch('https://dummyjson.com/products/categories');
    if(!categoriesData.ok){
        throw new Error('Failed to fetch categories')
    }

    return categoriesData.json();
}

export default async function CategoriesList (){
    const categories = await getCategories();
    return (
        <>
            {categories.map((category) => (
                <NavLink key={category} link="/products" linkName={category} />
            ))}
        </>
    )
}