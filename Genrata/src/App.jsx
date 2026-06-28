import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/Auth/Pages/LoginPage";
import SignupPage from "./features/Auth/Pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
