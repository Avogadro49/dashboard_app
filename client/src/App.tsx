import { Routes, Route } from "react-router-dom";
// import Homepage from "./views/pages/Homepage";
import Layout from "./views/layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<p>not found page</p>} />
    </Routes>
  );
}

export default App;
