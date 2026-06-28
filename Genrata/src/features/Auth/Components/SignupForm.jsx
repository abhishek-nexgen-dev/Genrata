/**
 * ===========================================
 * Signup Form
 * -------------------------------------------
 * This component displays the registration form.
 *
 * Fields:
 * - Full Name
 * - Username
 * - Email
 * - Password
 * - Confirm Password
 * - Terms & Conditions
 * - Social Signup
 * ===========================================
 */

import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <section className="h-[150vh] flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-lg">
        {/* =========================
            Heading
        ========================== */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>

          <p className="mt-2 text-sm text-gray-400">
            Join Genrata AI and start building smarter.
          </p>
        </header>

        {/* =========================
            User Information
        ========================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition duration-200 focus:border-indigo-500"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="john_doe"
              className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition duration-200 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition duration-200 focus:border-indigo-500"
          />
        </div>

        {/* =========================
            Password Section
        ========================== */}

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition duration-200 focus:border-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-700 bg-[#23232B] px-4 py-3 text-white outline-none transition duration-200 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* =========================
            Terms & Conditions
        ========================== */}

        <div className="mt-6 flex items-start">
          <input
            id="terms"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded accent-indigo-600"
          />

          <label htmlFor="terms" className="ml-3 text-sm text-gray-300">
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Terms & Conditions
            </button>
          </label>
        </div>

        {/* =========================
            Signup Button
        ========================== */}

        <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition duration-200 hover:bg-indigo-700">
          Create Account
        </button>

        {/* =========================
            Divider
        ========================== */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-700"></div>

          <span className="mx-4 text-sm text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        {/* =========================
            Social Signup
        ========================== */}

        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-lg border border-gray-700 py-3 text-white transition duration-200 hover:bg-[#23232B]">
            Google
          </button>

          <button className="rounded-lg border border-gray-700 py-3 text-white transition duration-200 hover:bg-[#23232B]">
            GitHub
          </button>
        </div>

        {/* =========================
            Footer
        ========================== */}

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?
          <Link
            to="/"
            className="ml-1 font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
