import CategoriesList from "./categoriesList";

export default function SideBar (){
    return (
        <>
            <div className="flex flex-col items-center p-4 bg-yellow-200">
                <h1>Categories</h1>
                <CategoriesList />
            </div>
        </>
    )
}