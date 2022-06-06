import "./telaadm.css";
import logo from "../../components/Img/logo.png";

function Adm() {
   console.log("Adm");
   const openNav = () => {
      console.log("openNav");
   }
   const closeNav = (evt) => {
      evt.preventDefault()
      console.log("closeNav");
   }
   return (
      <div>
         <div id="bar">
            <div id="btn">
               <span style={{ fontSize:"25px", cursor: "pointer" }} onClick={openNav} >&#9776; </span>
            </div>
  
            <div id="img">
                <img className="img1" src={logo} />
            </div>
         </div>
         <div id="mySidenav" className="sidenav">
            <a className="closebtn" onClick={closeNav} >&times;</a>
            <a href="#" className="bi bi-briefcase"> Minha CoTrip</a>
            <a href="#" className="bi bi-star"> Recompensas</a>
            <a href="#" className="bi bi-person-badge"> Dados pessoais</a>
            <a href="#" className="bi bi-kanban"> Gerenciar Orçamentos</a>
         </div>
      <div id="main" className="cont-a"/>
         <div>
           <h4 id="pacote">Seu Pacote de Viagem</h4>
           <a id="editarInfo" href="#" className="bi bi-pencil-square"> Editar informações</a>
         </div>
         <div id="informativo">
            <p className="infoP">Olá viajante!
               <br/>
              Este é o painel da sua CoTrip...
            </p>
          </div>

        <div id="infoTrip">
  
           <i id="destiny" className="bi bi-geo-alt-fill">
              <label for="destiny">Destino:</label>
              <p className="infoDetermine" id="dest1">teste teste</p>
           </i>
  
  
           <i id="qtdPessoas" class="bi bi-person-fill">
              <label for="qtdPessoas">Quantas Pessoas:</label>
              <p className="infoDetermine">teste teste</p>
           </i>
           <i id="data" className="bi bi-calendar-fill">
              <label for="data">Data:</label>
              <p className="infoDetermine">teste teste</p>
           </i>
           <i id="meta" className="bi bi-currency-dollar">
              <label for="meta">Meta:</label>
              <p className="infoDetermine">teste teste</p>
           </i>
  
           <div id="agenteCO">
              <hr id="linhaH"/>
              <p id="ajudaPerfil">Podemos ajuda-lo a preparar o seu perfil de viagem!</p>
              <button id="btnAgente">
                 <i className="bi bi-chat"> Falar com um agente CoTrip</i>
              </button>
           </div>
        </div>
        <div id="infoCoEdit">
           <h4 id="infoComplementares">Informações complementares</h4>
           <a id="editarInfo2" href="#" className="bi bi-pencil-square"> Editar informações</a>
           <hr id="linhaH2"/>
        </div>
         <div id="perguntas">
            <div id="motivoAlt">
              <p>Motivo da viagem:</p>
              <p className="infoDetermine">teste teste</p>
              <p>Você tem datas alternativas para a viagem?</p>
              <p className="infoDetermine">teste teste</p>
            </div>
            <div id="opcoesHosp">
              <p>Você aceitaria outras opções de destino?</p>
              <p className="infoDetermine">test teste</p>
              <p>Qual perfil de hospedagem que você deseja?</p>
              <p className="infoDetermine">teste teste</p>
            </div>
         </div>
        <h4 style={{fontSize: "20px", id: "plan"}}>Meu Plano</h4>
        <hr id="linhaH3"/>

           <div id="box1">
              <h3 classeName="bi bi-currency-dollar"style={{color: "red", marginTop: "20px"}}>0/ mês</h3>
              <p>Lorem ipsum dollor sit amet olorum sonoe</p>
            </div>

           <div id="box2">
              <h3 classeName="bi bi-currency-dollar"style={{color: "red", marginTop: "25px"}}>15/ mês</h3>
              <p>Lorem ipsum dollor sit amet olorum sonoe</p>
  
           </div>
           <div id="box3">
              <h3 classeName="bi bi-currency-dollar"style={{color: "red", marginTop: "25px"}}>29/ mês</h3>
              <p>Lorem ipsum dollor sit amet olorum sonoe</p>
           </div>
  
     <div id="main2" className="cont-b">
         <div>
           <a id="acessarPerfil" href="#" className="bi bi-box-arrow-in-left">Acessar seu Perfil</a>
           <i id="endereco" style={{fontSize: "10px"}}><b>Endereço: </b> www.cotrip.com.br/Viajante</i>
         </div>
        <hr id="linhaH4"/>
         <div id="progreBar">
           <progress id="barra" value="0" max="100"></progress>
         </div>
         <div id="ord">
            <div id="testeP1">
              <i className="bi bi-geo-alt-fill" id="ponto1"></i>
              <p style={{fontSize: "10px", marginLeft: "18px"}}>Teste
                 <br/>
                 teste
              </p>
            </div>
            <div id="testeP2">
              <i className="bi bi-geo-alt-fill" id="ponto2"></i>
              <p style={{fontSize: "10px", marginRight: "28px"}}>Teste
                 <br/>
                 teste
              </p>
            </div>
        </div>
      </div>
      <div id="infohr" style= {{textAlign: "center"}}>
         <div id="infohr1">
            <h5 style= {{fontSize: "12px"}}>Arrecadados</h5>
            <h3>00</h3>
         </div>
         <hr style={{width: "0.5px", height: "80px"}} />
         <div id="infohr2">
            <h5 style={{fontSize: "11px"}}>Apoiadores</h5>
            <h3>00</h3>
         </div>
         <hr style={{height: "80px" , width:"0.5px"}}/>

         <div id="infohr3">
            <h5 style={{fontSize: "11px"}}>Visualizações</h5>
            <h3 style={{marginRight: "20px"}}>00</h3>
         </div>
         <div id="linksEsD">
         <a href="#">Editar meu perfil</a>
         <a href="#">Sacar valor arrecadado</a>
         <a href="#">Desativar meu perfil</a>
         </div>
         <div id="chat">
         <a href="#" class="bi bi-chat" style={{color: "white", fontSize: "25px" ,position: "absolute" , top: "6px", left: "12px"}}></a>
         </div>
      </div>
   </div>

);
}
  
  export default Adm;
