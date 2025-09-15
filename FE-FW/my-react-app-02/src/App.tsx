import { BrowserRouter, Route, Routes } from "react-router-dom";
import Review from "./pages/FastFood/Review";
import Home from "./components/Home";
import Navbar from "./components/FastFood/components/Navbar";
import AuthContext from "./auth/AuthContext";
import Login from "./pages/FastFood/Login";
import Register from "./pages/FastFood/Register";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
