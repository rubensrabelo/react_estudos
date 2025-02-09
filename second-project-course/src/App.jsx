import './App.css';

import Img_2 from "./assets/img-2.jpg";
import ListRender from './components/ListRender';
import ManagerData from "./components/ManagerData";
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    {id: 1, name: "Matheus", job: "Desenvolvedor", age: 25},
    {id: 2, name: "Pedro", job: "Designer", age: 30},
    {id: 3, name: "João", job: "Gerente de Projetos", age: 35},
    {id: 4, name: "Maria", job: "Analista de Sistemas", age: 28},
    {id: 5, name: "Ana", job: "Engenheira de Software", age: 32},
    {id: 6, name: "José", job: "Administrador de Redes", age: 40},
  ]

  return (
    <>
      <h1>Seção 3</h1>

      <div>
        <img src="./img-1.webp" alt="Mulher lendo os livros" />
      </div>

      <div>
        <img src={Img_2} alt="Onça pintada" />
      </div>

      <ManagerData />
      <ListRender />

      {
        users.map(user => (
          <UserDetails
            key={user.id}
            user={user}
          />
        ))
      };
    </>
  )
}

export default App
