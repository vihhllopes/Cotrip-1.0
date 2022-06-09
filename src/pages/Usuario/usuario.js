import "./usuario.css";
import "../../App.css";
import user from "../../components/Img/Usuario/user.png";
import banner from "../../components/Img/Usuario/banner.png";
import configuracao from "../../components/Img/Usuario/configuracao.png";
import edicao from "../../components/Img/Usuario/edicao.png";
import pino from "../../components/Img/Usuario/pino.png";
import linha from "../../components/Img/Usuario/linha.png";
import aviao from "../../components/Img/Usuario/aviao.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Usuario = () => {
  return (
    <div>
      <div id="menu">
        <ul className="container">
          <div id="menuOptions">
            <img src={configuracao} id="admLogo" />
            <Link className="menuText admText" to="/Adm">
              <label className="menu-style">Painel Administrativo</label>
            </Link>

            <a className="menuText editModeText">
              <img src={edicao} id="editModeLogo" />
              <label className="menu-style">Ativar modo edição do perfil</label>
            </a>
          </div>
        </ul>
      </div>
      <div>
        <img src={banner} id="fundo" />
        <img src={user} id="perfil" />
      </div>
      <h2 id="mainText">
        Viagem para a {localStorage.getItem("destino")} -{" "}
        {localStorage.getItem("nomeCompleto")}
      </h2>
      <div>
        <img src={pino} className="localization before" />
        <p className="city before">{localStorage.getItem("origem")}</p>
        <img src={linha} id="retangulo" />
        <img src={aviao} id="aviao" />
        <p value={" "} className="city after">
          {localStorage.getItem("destino")}
        </p>
        <img src={pino} className="localization after" />
      </div>
      <div className="container">
        <button id="sobreTxt">Sobre</button>
        <div id="sobreFrame"></div>
        <h1 id="sobreTitulo">{localStorage.getItem("faleSobre")}</h1>
        <p value={" "}></p>
        <button className="option first">Diário de bordo</button>
        <button className="option second">Apoiadores</button>
        <button className="option third">Mensagens</button>
      </div>
      <div id="sidebar"></div>
      <div id="bluebox"></div>
      <div id="bluebar"></div>
      <h2 id="bluetext">Total arrecadado</h2>
      <h3 id="blueprice">R$ {localStorage.getItem("valorArrecadado")}</h3>
      <div id="greenbox"></div>
      <div id="greenbar"></div>
      <h2 id="greentext">Meta</h2>
      <h3 id="greenprice">R$:9.500</h3>
      <p className="frase">4 apoiadores até o momento </p> <br></br>
      <p id="frase">
        Arrecadação até{" "}
        <b value={" "}>{localStorage.getItem("dataDeEncerramento")}</b>
      </p>
    </div>
  );
};

export default Usuario;
