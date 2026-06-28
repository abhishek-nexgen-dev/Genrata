import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/Auth/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;