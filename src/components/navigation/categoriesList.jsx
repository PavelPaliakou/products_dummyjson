'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


export default async function CategoriesList({categories}) {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <>
            {categories.map((category) => (
                <Link
                    key={category}
                    className={`px-4 py-2 hover:bg-gray-100 ${pathname === `/${category}` ? 'font-bold' : ''}`}
                    href={`/${category}`}>
                    {category.replaceAll("-"," ")}
                </Link>
            ))}
        </>
    )
}