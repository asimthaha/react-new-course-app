import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCourseAdd from "./components/NewCourseAdd";
import NewCourseView from "./components/NewCourseView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NewCourseAdd />}></Route>
        {/* <Route path="search" element={<ProductSearch />}></Route>
        <Route path="delete" element={<ProductDelete />}></Route> */}
        <Route path="view" element={<NewCourseView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
