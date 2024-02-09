"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import PaginationButton from "./paginationButton";

export default function Pagination({ total }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemLimit = 10;
    const numberOfPages = 5;
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function pageHandle(pageNumber) {

    }

    return (
        <div className="flex flex-row mx-auto gap-2">
            <PaginationButton pageNumber={"❮❮"} />
            <PaginationButton pageNumber={"❮"} />
            <PaginationButton pageNumber={1} />
            <PaginationButton pageNumber={2} />
            <PaginationButton pageNumber={3} />
            <PaginationButton pageNumber={4} />
            <PaginationButton pageNumber={5} />
            <PaginationButton pageNumber={"❯"} />
            <PaginationButton pageNumber={"❯❯"} />
        </ div>
    )
}