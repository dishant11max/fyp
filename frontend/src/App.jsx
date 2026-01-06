
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import DocsPage from "./pages/Docs"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path = "/docs" element={<DocsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
