import SearchBar from "./navigation/searchBar";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-red-400 shadow">
            <div className="flex flex-row justify-between items-center py-2 px-4 max-w-7xl mx-auto">
                <div className="flex flex-row items-center">
                    <Link href={"/"}>
                        <img src="./site_logo.svg" width={200} height={200}/>
                    </Link>
                    <Link href={"/withpages"}>WithPages</Link>
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