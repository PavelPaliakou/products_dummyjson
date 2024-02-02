import LoginWith from "@/components/login/loginWith";
import Separator from "@/components/login/separator";
import LoginInput from "./loginInput";

export default function Login() {
    return (
            <section className="text-center col-span-3 bg-white">
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
                            <LoginInput inputName="First name" type="text" />
                            <LoginInput inputName="Last name" type="text" />
                            <LoginInput inputName="Email" type="email" />
                            <LoginInput inputName="Password" type="password" />
                            <div className="mt-4 mx-2 text-center">
                                <button type="submit" className="px-8 py-2 bg-blue-600 text-sm text-white font-semibold rounded-full hover:bg-blue-800">Create account
                                </button>
                            </div>
                        </form>
                    </div>
                    <Separator />
                    <LoginWith />
                </div>
            </section>
    )
}