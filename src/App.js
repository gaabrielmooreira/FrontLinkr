import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TrendingPage from "./pages/TrendingPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/trending/hashtag/:idHashtag" element={<HashtagPage/>}/>
        <Route path="/user/:idUser" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}
