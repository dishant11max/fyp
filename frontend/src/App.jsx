
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import DocsPage from "./pages/Docs"
import CommunityPage from "./pages/CommunityPage";
import SignInSignUp from "./pages/SignInSignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path = "/docs" element={<DocsPage/>}/>
        <Route path = "/community" element={<CommunityPage/>}/>        
      </Routes>

      <Routes>
      <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/signup" element={<SignInSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
