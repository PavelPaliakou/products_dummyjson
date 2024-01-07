import SearchBar from "./navigation/search";
import NavLink from "./navigation/navLink";

const links = ["All", "New", "Featured"];

export default function Header() {
    return (
        <header className="bg-red-400 shadow">
            <div className="flex flex-row justify-between items-center py-2 px-4">
                <div className="flex flex-row items-center">
                    <p className="text-3xl font-bold tracking-tight text-gray-900">
                        Logo
                    </p>
                    {links.map((link) => (
                        <NavLink key={link} link="/products" linkName={link} />
                    ))}
                </div>
                <SearchBar />
                <div className="flex flex-row">
                    <a href="#">Card</a>
                    <a href="#">Log in</a>
                </div>
            </div>
        </header>
    )
}