import { Routes, Route } from "react-router-dom";
// import Homepage from "./views/pages/Homepage";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home";
import TeacherForm from "./views/pages/Teacher/create";
import IndexTeachers from "./views/pages/Teacher";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers/create" element={<TeacherForm />} />
        <Route path="teachers/index" element={<IndexTeachers />} />
      </Route>
    </Routes>
  );
}

export default App;
