import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import ChatInput from "../Components/ChatInput";
import ChatArea from "../Components/ChatArea";

const ChatPage = () => {
  return (
    <main className="flex h-screen bg-[#0F0F11] text-white">
      {/* ================= Sidebar ================= */}

      <Sidebar />

      {/* ================= Main Content ================= */}

      <section className="flex flex-1 flex-col">
        <Navbar />

        <ChatArea />

        <ChatInput />
      </section>
    </main>
  );
};

export default ChatPage;
