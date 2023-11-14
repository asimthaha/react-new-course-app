import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCourseAdd from "./components/NewCourseAdd";
import NewCourseView from "./components/NewCourseView";
import NewCoursSearch from "./components/NewCourseSearch";
import NewCourseDelete from "./components/NewCourseDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NewCourseAdd />}></Route>
        <Route path="search" element={<NewCoursSearch />}></Route>
        <Route path="delete" element={<NewCourseDelete />}></Route>
        <Route path="view" element={<NewCourseView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
