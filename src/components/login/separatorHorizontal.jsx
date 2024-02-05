export default function SeparatorHorizontal() {
    return (
        <div className="text-center w-[90%] h-4 mt-8 mx-auto relative">
            <span className="bg-gray-800 block m-auto h-px"></span>
            <div className="absolute w-full text-center -top-[12px]">
                <span className="bg-white mx-px">or</span>
            </div>
        </div>
    )
}