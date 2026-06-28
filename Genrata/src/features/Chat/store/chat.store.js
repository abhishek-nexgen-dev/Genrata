import { create } from "zustand";

/**
 * ======================================================
 * Chat Store
 * ------------------------------------------------------
 * Global state for managing chat messages.
 *
 * State:
 * • chatHistory → Stores all chat messages.
 *
 * Actions:
 * • addMessage()       → Add a new message.
 * • clearChatHistory() → Remove all messages.
 * ======================================================
 */

const useChatStore = create((set) => ({
  /* ==========================================
     State
  ========================================== */

  // Stores all chat messages
  chatHistory: [],

  /* ==========================================
     Actions
  ========================================== */

  /**
   * Add a new message to chat history.
   *
   * Example:
   * addMessage({
   *   role: "user",
   *   message: "Hello",
   *   time: "10:30 AM",
   * })
   */
  addMessage: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, message],
    })),

  /**
   * Clear all chat messages.
   */
  clearChatHistory: () =>
    set({
      chatHistory: [],
    }),
}));

export default useChatStore;