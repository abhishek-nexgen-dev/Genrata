import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/Auth/Pages/LoginPage";
import SignupPage from "./features/Auth/Pages/SignupPage";
import ChatPage from "./features/Chat/Page/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
