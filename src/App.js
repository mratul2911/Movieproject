import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/List";
import Moviedetail from "./Components/Moviedetail";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Moviedetail/:id" element={<Moviedetail />} />
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
