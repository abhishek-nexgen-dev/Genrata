/**
 * ====================================================
 * Chat Message Component
 * ----------------------------------------------------
 * Responsibilities:
 * • Display User Message
 * • Display AI Message
 * • Show Avatar
 * • Show Timestamp
 * • Show Action Buttons
 *
 * Props
 * -----
 * role    : "user" | "assistant"
 * message : Message Content
 * time    : Message Time
 * ====================================================
 */

const ChatMessage = ({ role, message, time }) => {
  // Check whether the message belongs to the user
  const isUser = role === "user";

  return (
    <article
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Message Container */}
      <div
        className={`flex max-w-3xl gap-4 ${isUser ? "flex-row-reverse" : ""}`}
      >
        {/* Avatar */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white ${
            isUser ? "bg-indigo-600" : "bg-green-600"
          }`}
        >
          {isUser ? "AG" : "AI"}
        </div>

        {/* Message Card */}
        <div
          className={`rounded-2xl px-5 py-4 ${
            isUser
              ? "bg-[#1a1919]  text-white"
              : "border border-[#2A2A2F] bg-[#18181B] text-gray-200"
          }`}
        >
          {/* Message Text */}
          <p className="whitespace-pre-wrap leading-7">{message}</p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
            {/* Time */}
            <span>{time}</span>

            {/* AI Actions */}
            {!isUser && (
              <div className="flex gap-3">
                <button className="transition hover:text-white">Copy</button>

                <button className="transition hover:text-white">Retry</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ChatMessage;
