import React from "react";
import LeftPanel from "../Components/LeftPanel";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#0F0F17] flex items-center justify-center px-6 py-10">
      {/* Main Login Container */}
      <section className="w-full max-w-6xl overflow-hidden rounded-2xl bg-[#18181B] shadow-2xl md:grid md:grid-cols-2">
        {/* Left Branding Panel */}
        <LeftPanel imgUrl="https://cdn.pixeldojo.ai/cdn-cgi/image/f=auto,q=75,w=3840/pixeldojo/generated-images/1779485470126-xf3f5emmz.png" />

        {/* Right Login Form */}
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
