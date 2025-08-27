import { BrowserRouter, Route, Routes } from "react-router-dom";
import Review from "./pages/FastFood/Review";
import Home from "./components/Home";
import Navbar from "./components/FastFood/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
