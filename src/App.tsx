import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
    </Routes>
  );
}
