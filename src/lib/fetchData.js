export async function getAllProducts() {
    const productsData = await fetch('https://dummyjson.com/products');

    if (!productsData.ok) {
        throw new Error('Failed to fetch data')
    }

    return productsData.json();
}

export async function getProduct(id) {
    const productData = await fetch(`https://dummyjson.com/products/${id}`);
    
    if(!productData.ok){
        throw new Error('Failed to fetch data')
    }

    return productData.json();
}

export async function getAllCategories() {
    const categoriesData = await fetch('https://dummyjson.com/products/categories');
    
    if(!categoriesData.ok){
        throw new Error('Failed to fetch categories')
    }

    return categoriesData.json();
}

export async function getProductsByCategory(categoryName) {
    const categoryData = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    
    if(!categoryData.ok){
        throw new Error('Failed to fetch category')
    }

    return categoryData.json();
}

