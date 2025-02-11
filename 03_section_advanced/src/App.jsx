import './App.css';

import city from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender  from './components/ListRender';
import Container  from './components/Container';

function App() {
  // const cars = [
  //   { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  //   { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  //   { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  // ];

  return (
    <>
      <div className="App">
        <h1>Seção 3</h1>

        <div>
          <img src="/img1.jpg" alt="Paisagem" />
          <img src={city} alt="Cidade" />
        </div>

        <ManageData />
        <ListRender />
        <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      </div>  
    </>
  )
}

export default App
