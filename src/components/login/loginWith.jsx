const providers = [
    { name: 'Google' },
    { name: 'Facebook' },
    { name: 'Apple' },
]

export default function LoginWith() {
    return (
        <div className="m-2 flex flex-col justify-center gap-4">
            {providers.map((provider) => (
                <div key={provider.name}>
                    <button type="submit" className="px-8 py-2 w-full border border-black bg-white text-sm font-semibold rounded-full hover:bg-gray-300">
                        Continue with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}