export default function SeparatorVertical() {
    return (
        <span className="text-center w-36 relative">
            <span className="bg-gray-800 block m-auto h-full w-px"></span>
            <span className="absolute bg-white w-full -ml-[50%] top-[45%]">or</span>
        </span>
    )
}