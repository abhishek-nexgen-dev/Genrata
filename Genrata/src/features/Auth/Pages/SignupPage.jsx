import LeftPanel from "../Components/LeftPanel";
import SignupForm from "../Components/SignupForm";

/**
 * ===========================================
 * Signup Page
 * -------------------------------------------
 * Displays:
 * 1. Branding Panel
 * 2. Registration Form
 * ===========================================
 */

const SignupPage = () => {
  return (
    <main className="h-screen bg-[#0F0F17] flex items-center justify-center px-6 py-15 ">
      <section className="w-full max-w-6xl overflow-hidden rounded-2xl bg-[#18181B] shadow-2xl md:grid md:grid-cols-2">
        <LeftPanel />

        <SignupForm />
      </section>
    </main>
  );
};

export default SignupPage;
