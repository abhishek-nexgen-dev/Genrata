/**
 * ==========================================
 * Chat Area Component
 * ------------------------------------------
 * Responsibilities:
 * • Display Welcome Screen
 * • Show Suggested Prompts
 * • Display Chat Messages (Later)
 * ==========================================
 */

const ChatArea = () => {
  // Suggested prompts
  const suggestions = [
    {
      title: "Build React App",
      description: "Create a modern React project with Tailwind CSS.",
      icon: "⚛️",
    },
    {
      title: "Explain AI",
      description: "Learn Artificial Intelligence from scratch.",
      icon: "🤖",
    },
    {
      title: "Write Code",
      description: "Generate clean and reusable React components.",
      icon: "💻",
    },
    {
      title: "Generate Image",
      description: "Create AI-powered images from text prompts.",
      icon: "🎨",
    },
  ];

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6">
      {/* ===============================
          Welcome Section
      =============================== */}

      <div className="max-w-3xl text-center">
        {/* Logo */}

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white shadow-lg">
          G
        </div>

        {/* Heading */}

        <h1 className="text-5xl font-bold text-white">Welcome to Genrata AI</h1>

        {/* Subtitle */}

        <p className="mt-4 text-lg text-gray-400">
          Ask questions, generate code, create content, or explore new ideas
          with your AI assistant.
        </p>
      </div>

      {/* ===============================
          Suggested Prompts
      =============================== */}

      <div className="mt-14 grid w-full max-w-5xl gap-5 md:grid-cols-2">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="rounded-2xl border border-[#2A2A2F] bg-[#18181B] p-6 text-left transition duration-300 hover:border-indigo-500 hover:bg-[#202024]"
          >
            <div className="mb-4 text-3xl">{item.icon}</div>

            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ChatArea;
