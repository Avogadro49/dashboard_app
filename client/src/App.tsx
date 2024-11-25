import { Routes, Route } from "react-router-dom";
import Homepage from "./views/pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<p>not found page</p>} />
      <Route path="*" element={<p>not found page</p>} />
    </Routes>
  );
}

export default App;
