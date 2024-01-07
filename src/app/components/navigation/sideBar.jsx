import NavLink from "./navLink"

export default function SideBar (){
    return (
        <>
            <div className="absolute top-0 left-0 bottom-0 flex flex-col items-center p-4 bg-yellow-200">
                <NavLink link="/products" linkName="All" />
                <NavLink link="/products" linkName="New" />
                <NavLink link="/products" linkName="Featured" />
            </div>
        </>
    )
}