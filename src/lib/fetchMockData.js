export async function getProducts() {
    // const productsData = await fetch('https://dummyjson.com/products');
    const productsData = await fetch('./mock/products.json');

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

export async function getCategories() {
    const categoriesData = await fetch('https://dummyjson.com/products/categories');
    
    if(!categoriesData.ok){
        throw new Error('Failed to fetch categories')
    }

    return categoriesData.json();
}

export async function getCategory(categoryName) {
    const categoryData = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    
    if(!categoryData.ok){
        throw new Error('Failed to fetch category')
    }

    return categoryData.json();
}

