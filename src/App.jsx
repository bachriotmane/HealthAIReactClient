import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'

import { Analyse } from "./components/Analyse";
import Home from "./components/Home";
import { General } from "./components/General";
import { Consultation } from "./components/Consultation";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ConfirmationCode } from "./components/ConfirmationCode";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<General />} />
         <Route path="/analyse" element={<Analyse />} />
         <Route path="/consultation" element={<Consultation />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/confirmation" element={<ConfirmationCode />} />
      </Routes>
    </BrowserRouter>
    
  )
}
