export default function Login() {
    return (
        <>
            <main class="text-center">
                <h1 class="text-4xl font-bold m-2">Create an account</h1>
                <div class="mb-8 mt-4 flex flex-row flex-wrap justify-center gap-4">
                    <span>
                        <input type="radio" id="personal_account" name="account_type" value="personal" />
                        <label for="personal_account">Personal account</label>
                    </span>
                    <span>
                        <input type="radio" id="business_account" name="account_type" value="business" />
                        <label for="business_account">Business account</label>
                    </span>
                </div>
                <div class="m-2 flex flex-row flex-wrap justify-center gap-11">
                    <div>
                        <form name="create_account_with_email" class="text-left">
                            <div class="my-1 mx-2">
                                <label for="first_name">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        First name
                                    </span>
                                    <input type="text" id="first_name" class="border border-black rounded-md" />
                                </label>
                            </div>
                            <div class="my-1 mx-2">
                                <label for="last_name">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Last name
                                    </span>
                                    <input type="text" id="last_name" class="border border-black rounded-md" />
                                </label>
                            </div>
                            <div class="my-1 mx-2">
                                <label for="email">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Email
                                    </span>
                                    <input type="email" id="email" class="border border-black rounded-md" />
                                </label>
                            </div>
                            <div class="my-1 mx-2">
                                <label for="password">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Password
                                    </span>
                                    <input type="password" id="password" class="border border-black rounded-md" />
                                </label>
                            </div>
                            <div class="mt-4 mx-2 text-center">
                                <button type="submit" class="px-8 py-2 bg-blue-600 text-sm text-white font-semibold rounded-full hover:bg-blue-800">Create account
                                </button>
                            </div>
                        </form>
                    </div>
                    <span class="text-center w-36 relative">
                        <span class="bg-gray-800 block m-auto h-full w-px"></span>
                        <span class="absolute bg-white w-full">or</span>
                    </span>
                    <div class="m-2 flex flex-col justify-center gap-4">
                        <div>
                            <button type="submit" class="px-8 py-2 w-full border border-black bg-white text-sm font-semibold rounded-full hover:bg-gray-300">Continue with google
                            </button>
                        </div>
                        <div>
                            <button type="submit" class="px-8 py-2 w-full bg-blue-600 text-sm text-white font-semibold rounded-full hover:bg-blue-800">Continue with facebook
                            </button>
                        </div>
                        <div>
                            <button type="submit" class="px-8 py-2 w-full border border-black bg-white text-sm font-semibold rounded-full hover:bg-gray-300">Continue with Apple
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}