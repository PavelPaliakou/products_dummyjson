async function getCategory(categoryName){
    const categoryData = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    
    if(!categoryData.ok){
        throw new Error('Failed to fetch data')
    }

    return categoryData.json();
}

export default async function Category({ params }) {
    const category = await getCategory(params.categories);
    
    return (
        <div className="flex flex-col items-center w-full">
            <h1>Category</h1>
            <p>{category}</p>
        </div>
    )
}