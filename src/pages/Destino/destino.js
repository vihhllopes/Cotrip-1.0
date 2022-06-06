import "../../App.css";
import "../Cadastro/cadastro.css"
import imgagemEscolhida from "../../components/Img/logo.png";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {Link}  from "react-router-dom";



function Destino() {
  const navigate = useNavigate();

  const[origin, setOrigin] = useState("");
  const[destination, setDestination] = useState("");
  const[date, setDate] = useState("");
  const[datev, setDatev] = useState("");
  const[valor, setValor] = useState("");
 const [error, setError] = useState("");
  const handleDestino = () => {
    if ( !origin | !destination | !date | !datev | !valor ) {
    setError ("*Preencha todos os campos");
    return;
    }
    navigate("/Cadastro");
  }
  return (
    <div>
      <img class= "img1"src={imgagemEscolhida} />
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

      <div className="card_form0">
        <h1 id="box-title">COMECE AGORA!</h1>
        <form id="form0" name="userForm" action="./form1.html" method="GET">
          <label htmlfor="origin" className="input-title2" required>
            Origem
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Exemplo: Recife, São Paulo"
            value={origin}
            onChange={(e) => [setOrigin(e.target.value), setError("")]}
          />

          <label htmlFor="destination" className="input-title2" required>
            Destino Principal{" "}
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Exemplo: Orlando, Flórida"
            value={destination}
            onChange={(e) => [setDestination(e.target.value), setError("")]}
          />

          <label htmlFor="guests" className="input-title2">
            Número de Pessoas
          </label>
          <select id="guests" name="propertyType" class="input-field2">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5+</option>
          </select>
          

          <label htmlFor="checkInDate" className="input-title2">
            Data de ida{" "}
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            className="input-field"
            value={date}
            onChange={(e) => [setDate(e.target.value), setError("")]}
          />

          <label htmlFor="checkOutDate" className="input-title2">
            Data de retorno{" "}
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            className="input-field"
            value={datev}
            onChange={(e) => [setDatev(e.target.value), setError("")]}
          />

          <label htmlFor="moneyGoal" class="input-title2" required>
            Valor que deseja arrecadar{" "}
          </label>
          <input
            type="text"
            id="moneyGoal"
            name="moneyGoal"
            placeholder="Exemplo: 5000"
            value={valor}
            onChange={(e) => [setValor(e.target.value), setError("")]}
          />
 <div>
               <label className="errordestCad">{error}</label>
           </div>
          <p>
            <button
              type="button"
              value="Continuar"
              id="form-button"
              className="form-button"
              onClick={handleDestino}
            >
              {" "}
              Continuar
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Destino;