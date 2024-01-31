import LoginWith from "@/components/login/loginWith";
import Separator from "@/components/login/separator";

export default function Login() {
    return (
        <>
            <main className="text-center col-span-3">
                <h1 className="text-4xl font-bold m-2">Create an account</h1>
                <div className="mb-8 mt-4 flex flex-row flex-wrap justify-center gap-16">
                    <span className="flex gap-2">
                        <input type="radio" id="personal_account" name="account_type" value="personal" />
                        <label htmlFor="personal_account">Personal account</label>
                    </span>
                    <span className="flex gap-2">
                        <input type="radio" id="business_account" name="account_type" value="business" />
                        <label htmlFor="business_account">Business account</label>
                    </span>
                </div>
                <div className="m-2 flex flex-row flex-wrap justify-center gap-11">
                    <div>
                        <form name="create_account_with_email" className="text-left">
                            <div className="my-1 mx-2">
                                <label htmlFor="first_name">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        First name
                                    </span>
                                    <input type="text" id="first_name" className="border border-black rounded-md" />
                                </label>
                            </div>
                            <div className="my-1 mx-2">
                                <label htmlFor="last_name">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Last name
                                    </span>
                                    <input type="text" id="last_name" className="border border-black rounded-md" />
                                </label>
                            </div>
                            <div className="my-1 mx-2">
                                <label htmlFor="email">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Email
                                    </span>
                                    <input type="email" id="email" className="border border-black rounded-md" />
                                </label>
                            </div>
                            <div className="my-1 mx-2">
                                <label htmlFor="password">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Password
                                    </span>
                                    <input type="password" id="password" className="border border-black rounded-md" />
                                </label>
                            </div>
                            <div className="mt-4 mx-2 text-center">
                                <button type="submit" className="px-8 py-2 bg-blue-600 text-sm text-white font-semibold rounded-full hover:bg-blue-800">Create account
                                </button>
                            </div>
                        </form>
                    </div>
                    <Separator />
                    <LoginWith />
                </div>
            </main>
        </>
    )
}