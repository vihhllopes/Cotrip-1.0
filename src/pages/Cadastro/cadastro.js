import "./cadastro.css"
import "../../App.css";
import logo from "../../components/Img/logo.png";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Cadastro= () =>{
 
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [estado, setEstado] = useState("");
  const [city, setCity] = useState("");
  const [campanha, setCampanha] = useState("");
  const [perfil, setPerfil] = useState("");
  const [encerramento, setEncerramento] = useState("");
  const [cotrip, setCotrip] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [hospedagem, setHospedagem] = useState("");
  const [error, setError] = useState("");

 const navigate = useNavigate();

  const handleCadastro =  () => {

    if ( !nome | !cpf | !nascimento | !estado | !city | !campanha | !perfil | !encerramento |
       !cotrip | !destino | !data | !hospedagem ) {
      setError("*Preencha todos os campos");
      return;
    }
alert("Usuário cadatrado com sucesso!");
    navigate("/Usuario");
  };
    return (
      <main>
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
        <Link to="/Criar"><button class="secundary-button">Criar</button></Link>
        </ul>
        <div>
          <h1 className="principal-title">Complete seu Cadastro</h1>
          <h3 id="subtitle">Queremos saber mais sobre você!</h3>
        </div>
        <form id="form2" action="./usuario/index.html" className="section_form">

          <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor="completeName" className="input-title">
              Nome Completo
            </label>
            <input
              type="text"
              id="completeName"
              name="completeName"
              classname="input-field"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
            />


            <label htmlFor="cpf" className="input-title">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="input-field"
              placeholder="Digite apenas números"
              value={cpf}
              onChange={(e) => [setCpf(e.target.value), setError("")]}
            />

            <label htmlFor="birthday" className="input-title">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="input-field"
              value={nascimento}
              onChange={(e) => [setNascimento(e.target.value), setError("")]}
            />

            <label htmlFor="state" className="input-title">
              Estado
            </label>
            <select id="state" name="country" className="input-field" value={estado} onChange={(e) => [setEstado(e.target.value), setError("")]}>
             <option value="--">--</option>
              <option value="acre">AC</option>
              <option value="alagoas">AL</option>
              <option value="amapa">AP</option>
              <option value="amazonas">AM</option>
              <option value="bahia">BA</option>
              <option value="ceara">CE</option>
              <option value="espiritoSanto">ES</option>
              <option value="goias">GO</option>
              <option value="maranhao">MA</option>
              <option value="matoGrosso">MT</option>
              <option value="matoGrossoSul">MS</option>
              <option value="minasGerais">MG</option>
              <option value="para">PA</option>
              <option value="paraiba">PB</option>
              <option value="parana">PR</option>
              <option value="pernambuco">PE</option>
              <option value="piaui">PI</option>
              <option value="rioDeJaneiro">RJ</option>
              <option value="rioGrandeNorte">RN</option>
              <option value="rioGrandeSul">RS</option>
              <option value="rondondia">RO</option>
              <option value="roraima">RR</option>
              <option value="santaCatarina">SC</option>
              <option value="saoPaulo">SP</option>
              <option value="sergipe">SE</option>
              <option value="tocantins">TO</option>
              <option value="distritoFederal">DF</option>
            </select>

            <label htmlFor="city" className="input-title">
              Cidade
            </label>
            <input type="text" id="city" name="city" className="input-field" value={city} onChange={(e) => [setCity(e.target.value), setError("")]}/>
          </fieldset>

          <fieldset>
            <legend>Dados da CoTrip</legend>
            <p id="note">
              *Não se preucupe. Você pode alterar essas opções depois!
            </p>
            <label htmlFor="cover_img" className="input-title">
              Escolha uma foto para a capa da sua campanha
            </label>
            <input
              type="file"
              id="cover_img"
              name="cover_img"
              className="input-field"
              value={campanha}
              onChange={(e) => [setCampanha(e.target.value), setError("")]}
            />

            <label htmlFor="profile_img" className="input-title">
              Escolha uma foto para seu perfil
            </label>
            <input
              type="file"
              id="profile_img"
              name="profile_img"
              className="input-field"
              value={perfil}
              onChange={(e) => [setPerfil(e.target.value), setError("")]}
            />

            <label htmlFor="limit_date" className="input-title">
              Defina a data de encerramento da sua campanha
            </label>
            <input
              type="date"
              id="limit_date"
              name="limit_date"
              className="input-field"
              value={encerramento}
              onChange={(e) => [setEncerramento(e.target.value), setError("")]}
            />

            <label htmlFor="mensagem" className="input-title">
              Hora de falar sobre sua CoTrip. Capricha!{" "}
            </label>
            <textarea
              id="mensagem"
              name="message"
              className="input-field"
              cols="70"
              rows="10"
              value={cotrip}
              onChange={(e) => [setCotrip(e.target.value), setError("")]}
            ></textarea>

            <label htmlFor="destinyOption" className="input-title">
              Você aceitaria outras opções de destino?
            </label>
            <select id="destinyOption" name="destinyOption" className="input-field" value={destino} onChange={(e) => [setDestino(e.target.value), setError("")]}>
              <option value="--">--</option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>

            <label htmlFor="datesOption" className="input-title">
              Você considera datas alternativas para a viagem?
            </label>
            <select id="datesOption" name="datesOption" className="input-field" value={data} onChange={(e) => [setData(e.target.value), setError("")]}>
             <option value="--">--</option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>

            <label htmlFor="propertyType" className="input-title">
              Qual tipo de hospedagem você deseja?
            </label>
            <select id="propertyType" name="propertyType" className="input-field" value={hospedagem} onChange={(e) => [setHospedagem(e.target.value), setError("")]}>
              <option value="--">--</option>
              <option value="hotel">Hotel</option>
              <option value="pousada">Pousada</option>
              <option value="flat">Flat</option>
              <option value="apartamento">Apartamento</option>
              <option value="albergue">Albergue</option>
              <option value="casaTemporada">Casa de temporada</option>
            </select>
          </fieldset>
            <div>
               <label className="errordestCad">{error}</label>
           </div>
          <button
                type="button"
                value="Continuar"
                id="form-button"
                className="form-button"
                onClick={handleCadastro}
                >
                  Criar minha Cotrip!
                  </button>
        </form>
      </main>
    );
}
export default Cadastro;