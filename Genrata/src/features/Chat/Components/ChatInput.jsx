/**
 * ==========================================
 * Chat Input Component
 * ------------------------------------------
 * Responsibilities:
 * • Accept user messages
 * • Send message button
 * • Attachment button
 * • Voice button
 *
 * Future Features:
 * • Auto resize textarea
 * • File Upload
 * • Voice Recording
 * • AI Model Selection
 * ==========================================
 */

const ChatInput = () => {
  return (
    <footer className="py-[3vh]">
      {/* Input Container */}
      <div className="mx-auto flex w-[70%] items-end gap-3 rounded-2xl border border-[#2A2A2F] bg-[#18181B] p-2 mt-[2vh]">
        {/* Attachment Button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-gray-400 transition hover:bg-[#26262C] hover:text-white">
          📎
        </button>

        {/* Message Input */}
        <textarea
          rows="2"
          placeholder="Ask Genrata anything..."
          className="h-[4vh] flex-1 resize-none bg-transparent px-2 py-2 text-white placeholder-gray-500 outline-none"
        />

        {/* Voice Button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-gray-400 transition hover:bg-[#26262C] hover:text-white">
          🎤
        </button>

        {/* Send Button */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700">
          ➜
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
