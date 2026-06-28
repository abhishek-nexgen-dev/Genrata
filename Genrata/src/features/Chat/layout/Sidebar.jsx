/**
 * ===============================================
 * Sidebar Component
 * -----------------------------------------------
 * Responsibilities:
 * • Display Logo
 * • New Conversation Button
 * • Search Chats
 * • Recent Chat History
 * • User Profile
 * ===============================================
 */

const Sidebar = () => {
  // Dummy chat history
  const chats = [
    "React Authentication",
    "Tailwind CSS Notes",
    "AI Roadmap",
    "Portfolio Website",
    "Node.js Backend",
  ];

  return (
    <aside className="hidden w-72 flex-col border-r border-[#2A2A2F] bg-[#161616] lg:flex">
      {/* ===============================
          Sidebar Header
      =============================== */}
      <header className="border-b border-[#2A2A2F] p-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Genrata AI
        </h1>

        <p className="mt-1 text-sm text-gray-400">Build • Think • Generate</p>

        {/* New Chat Button */}
        <button className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition duration-200 hover:bg-indigo-700">
          + New Conversation
        </button>
      </header>

      {/* ===============================
          Search Box
      =============================== */}
      <div className="p-6">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full rounded-lg border border-[#2A2A2F] bg-[#1F1F23] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition duration-200 focus:border-indigo-500"
        />
      </div>

      {/* ===============================
          Chat History
      =============================== */}
      <section className="flex-1 overflow-y-auto px-4">
        <h2 className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Recent Chats
        </h2>

        <div className="space-y-2">
          {chats.map((chat, index) => (
            <button
              key={index}
              className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm transition duration-200
              ${
                index === 0
                  ? "bg-[#26262C] text-white"
                  : "text-gray-400 hover:bg-[#1F1F23] hover:text-white"
              }`}
            >
              💬
              <span className="ml-3 truncate">{chat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ===============================
          User Profile
      =============================== */}

      <footer className="border-t border-[#2A2A2F] p-5">
        <div className="flex items-center">
          {/* Avatar */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            AG
          </div>

          {/* User Details */}
          <div className="ml-3">
            <h3 className="text-sm font-medium text-white">Abhishek Gupta</h3>

            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
