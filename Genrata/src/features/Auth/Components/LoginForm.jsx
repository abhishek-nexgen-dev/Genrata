import React from "react";

const LoginForm = () => {
  return (
    <section className="flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-md">
        {/* Heading */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>

          <p className="mt-2 text-sm text-gray-400">
            Intelligence at your fingertips.
          </p>
        </header>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>

            <button
              type="button"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </button>
          </div>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Remember Me */}
        <div className="mb-6 flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-600 accent-indigo-600"
          />

          <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
            Remember this device
          </label>
        </div>

        {/* Sign In Button */}
        <button className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700">
          Sign In
        </button>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-700"></div>

          <span className="mx-4 text-sm text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-lg border border-gray-700 py-3 text-white transition hover:bg-[#23232B]">
            Google
          </button>

          <button className="rounded-lg border border-gray-700 py-3 text-white transition hover:bg-[#23232B]">
            GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?
          <button className="ml-1 text-indigo-400 hover:text-indigo-300">
            Sign Up
          </button>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
