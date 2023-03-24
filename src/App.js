import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import HashtagPage from "./pages/HashtagPage";
import AuthProvider from "./context/auth";
import Infinite from "./pages/infinite";

export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
          <Route path="/timeline" element={<HomePage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/user/:idUser" element={<UserPage />} />
          <Route path="/i" element={<Infinite />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
