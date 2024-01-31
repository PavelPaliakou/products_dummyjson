import SearchBar from "./navigation/search";
import Link from "next/link";

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
                        <Link 
                            key={link} 
                            className="px-4 py-2 hover:bg-gray-100" 
                            href="/"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <SearchBar />
                <div className="flex flex-row gap-4">
                    <a href="#">Card</a>
                    <a href="/login">Log in</a>
                </div>
            </div>
        </header>
    )
}