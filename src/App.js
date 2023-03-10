import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import HashtagPage from "./pages/HashtagPage";
import AuthProvider from "./context/auth";

export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/trending/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/user/:idUser" element={<UserPage />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
