import { Routes, Route } from "react-router-dom";
// import Homepage from "./views/pages/Homepage";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home/Home";
import TeacherForm from "./views/pages/Teacher/create";
import IndexTeachers from "./views/pages/Teacher";
import IndexColleges from "./views/pages/Colleges";
import ShowTeachers from "./views/pages/Teacher/show";
import CollegeForm from "./views/pages/Colleges/create";
import IndexGroups from "./views/pages/Groups";
import GroupForm from "./views/pages/Groups/create";
import ShowColleges from "./views/pages/Colleges/show";

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
        <Route path="colleges/:id" element={<ShowColleges />} />
        <Route path="groups/index" element={<IndexGroups />} />
        <Route path="groups/create" element={<GroupForm />} />
      </Route>
    </Routes>
  );
}

export default App;
