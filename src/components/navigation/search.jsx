"use client"

export default function SearchBar() {
    return (
        <form className="max-w-[550px] relative w-full">
            <input
                type="text"
                name="search"
                placeholder="Search for products..."
                autoComplete="off"
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500"
            />
        </form>
    )
}