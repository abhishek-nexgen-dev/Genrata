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
        <SignupForm />
        <LeftPanel imgUrl="https://cdn.pixeldojo.ai/cdn-cgi/image/f=auto,q=75,w=3840/pixeldojo/generated-images/1739558672340-ncee3mqhh.png" />
      </section>
    </main>
  );
};

export default SignupPage;
