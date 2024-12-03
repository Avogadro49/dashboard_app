import { Routes, Route } from "react-router-dom";
// import Homepage from "./views/pages/Homepage";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home/Home";
import TeacherForm from "./views/pages/Teacher/create";
import IndexTeachers from "./views/pages/Teacher";
import IndexColleges from "./views/pages/Colleges";
import ShowTeachers from "./views/pages/Teacher/show";
import CollegeForm from "./views/pages/Colleges/create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers/create" element={<TeacherForm />} />
        <Route path="teachers/index" element={<IndexTeachers />} />
        <Route path="teachers/:id" element={<ShowTeachers />} />
        <Route path="colleges/index" element={<IndexColleges />} />
        <Route path="colleges/create" element={<CollegeForm />} />
        {/* <Route path="colleges/show/:id" element={<IndexColleges />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
