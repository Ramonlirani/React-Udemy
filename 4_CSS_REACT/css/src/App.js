import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react";
import Tittle from './components/Tittle';

function App() {

  const n = 15;
  const [name] = useState("Ramon");

  const redTittle = true;

  return (
    <div className="App">
      {/*CSS global */}
      <h1> React com CSS</h1>
      {/*CSS de componente */}
      <MyComponent/>
      <p>Este parágrafp é do app.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue",padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi eslizado de forma inline
      </p>
      {/*CSS Inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinamico
      </h2>
      <h2 style={
          name === "Ramon" 
          ? ({color: "green", backgroundColor: "red"})
          : null}>

        Teste nome
      </h2>
      {/* Classe dinamica */}
      <h2 className={redTittle ? "red-tittle" : "tittle"}>
        Este titulo vai ter classe dinamica
      </h2>
      {/* CSS modules */}
      <Tittle/>
    </div>
  );
}

export default App;
