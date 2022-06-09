import "./criar.css";
import "../../App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Criar = () => {
  const [email, setEmail] = useState("");
  const [campaign, setcampaign] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email | !campaign | !senha) {
      setError("*Preencha todos os campos");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    localStorage.setItem("campaign", campaign);
    navigate("/Destino");
  };

  let aTagUrl = "";

  return (
    <div>
      <h1 className="title_form1">Crie agora sua CoTrip!</h1>
      <h3 id="subtitle_form1">Vamos te ajudar a preparar sua campanha!</h3>
      <div className="card_form1">
        <form
          id="form1"
          name="userForm"
          action="./form2.html"
          onSubmit={handleSubmit}
        >
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
          <label htmlFor="manterlogado" className="input-title2">
            Aceito os{" "}
            <a className="link" href={aTagUrl}>
              Termos de Uso
            </a>{" "}
            e{" "}
            <a className="link" href={aTagUrl}>
              Política de Privacidade
            </a>
          </label>
          <div>
            <label className="error">{error}</label>
          </div>
          <h3>
            <button
              type="submit"
              value="Continuar"
              id="form-button"
              className="form-button"
            >
              {" "}
              Criar
            </button>
            <p className="asking">
              Já tem uma Cotrip?{" "}
              <Link className="link" to="/Login">
                Faça seu login!
              </Link>
            </p>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Criar;
