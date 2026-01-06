
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import DocsPage from "./pages/Docs"
import CommunityPage from "./pages/CommunityPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path = "/docs" element={<DocsPage/>}/>
        <Route path = "/community" element={<CommunityPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
