"use client"

import Search from "@/app/(products)/search/page";
import { useRouter, useSearchParams } from "next/navigation";

//TODO: event.preventDefault();??? remove console.logs

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    function submitHandler(event){
        event.preventDefault(); //????????

        const searchValue = event.target;
        const search = searchValue.search;
        const request = search.value;
        const newParams = new URLSearchParams(searchParams.toString());

        
        console.log("search.value = " + search.value); // request
        console.log("newParams = " + newParams) //search=request
        console.log("-----------------------")

        newParams.set("q", request);
        console.log("newParams = " + newParams) //search=request

        router.push(`/search?${newParams}`)
    }

    return (
        <form onSubmit={submitHandler} className="max-w-xl relative w-full">
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