import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Component/Pages/Content/Content";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Page/dist/css/AdminLTE.min.css';
import CreateEdt from './Component/EmploiDuTemps/CreateEdt'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path="/edt" element={<CreateEdt />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
