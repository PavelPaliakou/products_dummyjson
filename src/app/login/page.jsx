import LoginWith from "@/components/login/loginWith";
import SeparatorHorizontal from "@/components/login/separatorHorizontal";
import LoginInput from "../../components/login/loginInput";
import Link from "next/link";

//TODO: Add calc for login height

export default function Login() {
    return (
        <section className="flex flex-col items-center justify-center bg-white h-screen">
            <h1 className="text-4xl font-bold m-2">Hello</h1>
            <p>Sign in or
                <Link className="text-blue-600" href={"/register"}> create an account</Link>
            </p>
            <div className="m-2 flex flex-col flex-wrap justify-center gap-4">
                <div>
                    <form className="flex flex-col justify-center text-center" name="create_account_with_email">
                        <LoginInput inputName="Email" type="email" />
                        <LoginInput inputName="Password" type="password" />
                    </form>
                    <SeparatorHorizontal />
                </div>
                <LoginWith />
            </div>
            <div className="flex gap-2">
                <input id="StayLogged" type="checkbox" />
                <label htmlFor="StayLogged">Stay signed in</label>
            </div>

        </section>
    )
}