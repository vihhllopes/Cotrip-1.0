import "./criar.css";
import "../../App.css";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Criar = () => {
  const [email, setEmail] = useState("");
  const [campaign, setcampaign] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleSignup = () => {
   if (!email | !campaign | !senha) {
     setError("*Preencha todos os campos");
     return;
   }
   navigate("/Destino");
 };
  return (
    <div>
      <h1 className="title_form1">Crie agora sua CoTrip!</h1>
      <h3 id="subtitle_form1">Vamos te ajudar a preparar sua campanha!</h3>
      <div className="card_form1">
        <form id="form1" name="userForm" action="./form2.html" method="GET">
          <label htmlFor="campaign" className="input-title2" required>
            Quero iniciar uma campanha chamada:{" "}
          </label>
          <input
            type="text"
            id="campaign"
            name="campaign"
            placeholder="Esse será o título da sua campanha..."
            value={campaign}
            onChange={(e) => [setcampaign(e.target.value), setError("")]}
          />

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
          <label htmlFor="manterlogado" class="input-title2">
            Aceito os{" "}
            <a className="link" href="#">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a className="link" href="#">
              Política de Privacidade
            </a>
          </label>
          <div>
               <label className="error">{error}</label>
           </div>
          <p>
            <button
              type="button"
              value="Continuar"
              id="form-button"
              class="form-button"
              onClick={handleSignup}
            >
              {" "}
              Criar
            </button>
            <h3 class="asking">
              Ainda não tem uma Cotrip?{" "}
              <Link className="link" to="/Criar">
                Crie
              </Link>
            </h3>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Criar;