import { Routes, Route } from "react-router-dom";
// import Homepage from "./views/pages/Homepage";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home/Home";
import TeacherForm from "./views/pages/Teacher/create";
import IndexTeachers from "./views/pages/Teacher";
import IndexColleges from "./views/pages/Colleges";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers/create" element={<TeacherForm />} />
        <Route path="teachers/index" element={<IndexTeachers />} />
        <Route path="colleges/index" element={<IndexColleges />} />
      </Route>
    </Routes>
  );
}

export default App;
