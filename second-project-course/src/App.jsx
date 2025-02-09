import './App.css';

import Img_2 from "./assets/img-2.jpg";
import ListRender from './components/ListRender';
import ManagerData from "./components/ManagerData";

function App() {

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
    </>
  )
}

export default App
