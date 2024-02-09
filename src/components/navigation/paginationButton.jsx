"use client"

export default function PaginationButton({pageNumber}) {

    return(
        <button className="w-8 h-8 rounded bg-white hover:bg-gray-100">
            {pageNumber}
        </button>
    )
}