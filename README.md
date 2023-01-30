<h1> Cotrip </h1>

 
📌O que é a cotrip? 
Site de uma empresa de Marketing

<h2>👨‍💻👩‍💻Desenvolvedores</h2> 


<p>• Maria Victoria </p>


<h2>✨ Tecnologias utilizadas ✨</h2>

- `Frontend`

[![HTML5](https://img.shields.io/badge/HTML5-0d1117?style=for-the-badge&logo=html5)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-0d1117?style=for-the-badge&logo=css3&logoColor=1572b6)](https://www.w3schools.com/css/)
[![React](https://img.shields.io/badge/React-0d1117?style=for-the-badge&logo=react)](https://reactjs.org)[![Javascript](https://img.shields.io/badge/javascript-0d1117?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



<h2>Como foi feito ❓</h2>

- O site foi pensado para uma empresa de marketing, em que tem a parte administrativa e a do funcionário (user). Foi criado com React e estilizado com styles componentes junto com o React Bootstrap, que foi utilizado nos formulários, Grid e na Tabela. Acabei utilizando o chakra ui apenas para o Modal já que tive dificuldade para chamar ele em outra tela com o do Bootstrap. Criei a tela ADM pensando em um dashboard em que você pode executar o CRUD do usuário (a função de criar, deletar e editar as informações do usuário) em que ele é armazenado no Local Storage no banco “users_db” e a Tela do Usuário em que você tem acesso a Lista. 


- A parte de Cadastro e a de Login foi feita com Context Api e se encontra na pasta Context/auth.js. Criei 2 tipos de Login, o do usuário para seguir para tela /user e o do Adm para seguir com a tela /adm.No Login do Usuario ele verifica se o Usuario que digitou tem o mesmo email e senha que se encontra no baco “user_db, caso não tenha aparecera "Usuário não cadastrado", caso algum dado esteja errado aparecera "E-mail ou senha incorretos".

- No Login do Adm criei um banco apenas para armazenar o Login do Adm, e determinei o Email e senha para já estarem armazenados no navegador assim que você entra no site, para poder entrar no Painel do ADM. No Login ele faz o mesmo que o do usuário sendo que acessa o banco “adm”.

- Editar foi criada na tela de cadastro Components/Controle/Cadastro.jsx com as informações que pedi para o usuário utilizando useState eu usei o parâmetro dataEdit para modificar o os dados. Quando clico em editar ele vai pegar os dados daquela pessoa e vai me mostrar para que eu edite e para remover ele remove no X e se por caso criar 2 emails iguais e você quiser apagar 1 conta, as duas serão apagadas. 

- Para Fazer as Lista eu usei o .map para pegar os dados armazenado na variável e puxei para a tabela.

- O signout é para quando você apertar o Botão de sair você se desconectar das telas

 
 <br>
 
 <h2 > Funcionalidades do projeto ⚙️</h2>

- `Funcionalidade 1`:Assim que o Adm cria um usuário, os dados ira aparecer na “Lista de Usuários” Se o adm tentar criar outro usuário com o mesmo Email ele será impedido pois a um Email existente.

- `Funcionalidade 2`: O adm pode editar e deletar o usuario

- `Funcionalidade 3`:O usuário so pode entrar no seu painel com o email e senha criado pelo Adm no painel Administrativo, já o Adm so pode entrar no Painel Administrativo com o Email e senha especifico.

- `Funcionalidade 4`: O Usuário consegue ver a Lista de Usuários criados no seu Painel

## Acesso ao Painel Administrativo
- Email: midiaonline@gmail.com 
- Senha: midiaonline

