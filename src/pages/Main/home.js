import React from "react";
import "./home.css";
import "../../App.css";
import logo from "../../components/Img/logo.png";
import whatsapp from "../../components/Img/whatsapp.png";
import {Link}  from "react-router-dom";
function Main() {
  return (
    <div className="home">
      <img className="img1" src={logo} />
      <ul>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#news">Como Funciona</a>
        </li>
        <li>
          <a href="#contact">CoTrips</a>
        </li>
        <li>
          <a href="#about">Quem já viajou</a>
        </li>
        <Link to="/Login"><button className="secundary-button">Entrar</button></Link>
        <Link to="/Criar"><button className="secundary-button">Criar</button></Link>
      </ul>
      <main>
        <div id="principal_msg">
          <h2 className="principal_msg_title">BEM VINDO A BORDO!</h2>
          <p className="principal_msg_sub">Que bom que você resolveu viajar.</p>
          <button className="create-button">
            {" "}
            <Link to="../Criar">CRIAR MINHA COTRIP!</Link>
          </button>
        </div>

        <div className="zap">
          <a
            href="https://api.whatsapp.com/send?phone=5581992464433&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20CoTrip!"
            target="_blank"
          >
            {" "}
            <img className="img" src={whatsapp} />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Main;