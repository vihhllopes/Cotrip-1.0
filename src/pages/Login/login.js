import "./login.css";
import "../../App.css";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "../Criar/criar.css";
import "../Cadastro/cadastro.css";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }
 alert("Bem vindo de Volta!");
    navigate("/Usuario");
  };

  return (
    <div>
      <h1 id="title_form1">Faça seu Login</h1>
      <h3 id="subtitle_form1">Bem Vindo de Volta! :) </h3>
      <a className="links" id="paracadastro"></a>
      <a className="links" id="paralogin"></a>
      <div className="card_form1">
        <div className="container">
          <form
            id="form1"
            name="userForm"
            href="http://evanescent-brick.surge.sh/"
            method="GET"
          >
            <input type="hidden" id="origin" name="origin" value="" />
            <input type="hidden" id="destination" name="destination" value="" />
            <input type="hidden" id="moneyGoal" name="moneyGoal" value="" />

            <label htmlFor="userEmail" className="input-title2" required>
              E mail
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <label htmlFor="userPsw" className="input-title2" required>
              Senha
            </label>
            <input
              type="password"
              id="userPsw"
              name="userPsw"
              placeholder="Sua senha deve conter entre 8 e 10 caracteres entre letras e números."
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />

            <input
              type="checkbox"
              name="manterlogado"
              id="manterlogado"
              value=""
            />
            <label htmlFor="manterlogado" className="input-title2">
              Manter-me logado
            </label>
           <div>
               <label className="error">{error}</label>
           </div>
   
            <p>
              <button
                type="button"
                value="Continuar"
                id="form-button"
                className="form-button"
                onClick={handleLogin}
              >
                {" "}
                Entrar
              </button>
              <p className="asking">
                Ainda não tem uma Cotrip?{" "}
                <Link  to="/Criar" className="link" >
                  Crie
                </Link>
              </p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
