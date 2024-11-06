"use client";

import { login } from "@/actions";

import { useFormState } from "react-dom";

import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  console.log(state)
  return (
  <div>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
                className="h-screen w-full object-cover object-top"
                src="https://images.unsplash.com/photo-1673166105771-1237d2069950?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="loginsection"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">Afford Motors</h3>
              <h2 className="text-white text-xl font-semibold mt-10">
                Finnest And Hassle Free Services You Can Dream About
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Login
            </h2>
            <p className="mt-2 text-base text-white">
              Don&apos;t have an account?
              <Link
                  href={"/register"}
                  title=""
                  className="font-medium text-white transition-all duration-200 hover:underline ml-2"
              >
                Sign Up
              </Link>
            </p>
            {state?.error && <p>{state.error}</p>}
            <form action={formAction} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Your Username"
                        name="username"
                        required
                    />
                  </div>
                </div>
                <div>
                  <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        name="password"
                        required
                    />
                  </div>
                </div>
                <div>
                  <button
                      className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white bg-purple-600 hover:bg-blue-600 "
                  >Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default LoginForm;
