export default function NavLink({ link, linkName }) {
    return (
        <>
            <a className="px-4 py-2 hover:bg-gray-100" href={link}>{linkName}</a>
        </>
    )
}