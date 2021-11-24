import { Link, Routes, Route } from "react-router-dom";
import Home from "./home";

export default function App() {
  return (
    <div>
      <Link to="/home?lang=en">English</Link>
      {" | "}
      <Link to="/home?lang=fa">Persian</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
