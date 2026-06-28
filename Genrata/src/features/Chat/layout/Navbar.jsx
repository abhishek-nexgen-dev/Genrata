/**
 * ==========================================
 * Navbar Component
 * ------------------------------------------
 * Responsibilities:
 * • Display Workspace Title
 * • Model Selector
 * • Action Buttons
 * • User Avatar
 * ==========================================
 */

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b  border-r border-[#2A2A2F] bg-[#161616]  px-8">
      {/* ==========================
          Left Section
      ========================== */}
      <div>
        <h2 className="text-xl font-semibold text-white">Genrata AI</h2>

        <p className="text-xs text-gray-400">Your Intelligent AI Workspace</p>
      </div>

      {/* ==========================
          Right Section
      ========================== */}

      <div className="flex items-center gap-4">
        {/* AI Model Selector */}
        <select className="rounded-lg border border-[#2A2A2F] bg-[#000000] px-4 py-2 text-sm text-white outline-none transition focus:border-indigo-500">
          <option>GPT-5</option>
          <option>Gemini</option>
          <option>Claude</option>
          <option>DeepSeek</option>
        </select>

        {/* User Avatar */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
          AG
        </button>
      </div>
    </header>
  );
};

export default Navbar;
