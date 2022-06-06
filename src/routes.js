import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/home";
import Login from "./pages/Login/login";
import Criar from "./pages/Criar/criar";
import Destino from "./pages/Destino/destino";
import Cadastro from "./pages/Cadastro/cadastro";
import Adm from "./pages/Adm/telaadm";
import Usuario from "./pages/Usuario/usuario";
function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Criar" element={<Criar />} />
        <Route path="/Destino" element={<Destino />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Adm" element={<Adm />} />
        <Route path="/Usuario" element={<Usuario/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;