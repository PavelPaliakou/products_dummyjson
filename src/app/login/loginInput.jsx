export default function LoginInput({inputName, type}) {
    const inputId = inputName.toLowerCase().replace(" ", "_");

    return (
        <div className="my-1 mx-2">
            <label htmlFor={inputId}>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    {inputName}
                </span>
                <input type={type} id={inputId} className="border border-black rounded-md" />
            </label>
        </div>
    )
}