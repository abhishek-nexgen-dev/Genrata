/**
 * ==========================================
 * Chat Area Component
 * ------------------------------------------
 * Responsibilities:
 * • Display Welcome Screen
 * • Display Chat Messages
 * • Handle Empty State
 * ==========================================
 */

import { useState } from "react";
import ChatMessage from "./ChatMessage";
import WelcomeScreen from "./WelcomeScreen";
import useChatStore from "../store/chat.store";

const ChatArea = () => {

let messages = useChatStore((state) => state.chatHistory);


  const dummyMessages = [
    {
      role: "user",
      message: "Hello, how are you?",
      time: "10:30 AM",
    },
    {
      role: "assistant",
      message: "I'm good, thank you! How can I assist you today?",
      time: "10:31 AM",
    },
    {
      role: "user",
      message: "Can you tell me a joke?",
      time: "10:32 AM",
    },
    {
      role: "assistant",
      message:
        "Why don't scientists trust atoms? Because they make up everything!",
      time: "10:33 AM",
    },
  ];



  return (
    <section className="flex-1 overflow-hidden bg-[#0F0F11]">
      {/* ==========================================
          Empty Chat
      ========================================== */}

      {messages.length === 0 ? (
        <WelcomeScreen />
      ) : (
        /* ==========================================
            Chat Messages
        ========================================== */
        <div className="h-full overflow-y-auto px-6 py-8">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                message={message.message}
                time={message.time}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ChatArea;
