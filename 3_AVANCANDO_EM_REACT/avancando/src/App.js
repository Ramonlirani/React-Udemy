//Componentes
import ManageData from './components/ManageData';

//Style
import './App.css';

import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';




function App() {

  //const name = "Ramon";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {id: 1, name: "Ramon", job: "Programador", age:25},
    {id: 2, name: "Maria", job: "Jogadora de futebol", age:22},
    {id: 3, name: "João", job: "Jornalista", age:45},
    {id: 4, name: "Enzo", job: "Estudante", age:12}
  ]

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props*/}
      <ShowUserName name={userName}/>
      {/* destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
      ))}
      {/* fragment*/}
      <Fragment propFragment="teste"/>
      {/* children*/}
      <Container myValue="teste">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="teste">
        <h5>Testando o container</h5>
      </Container>
      {/* executar funcao*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio*/}
      {users.map((user)=>(
        <UserDetails 
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />

      ))}
    </div>
  );
}

export default App;
