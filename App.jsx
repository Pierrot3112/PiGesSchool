import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Content from "./Component/Pages/Content/Content";
// import NavBar from "./Component/Pages/NavBar/NavBar";


import './Page/dist/css/AdminLTE.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
