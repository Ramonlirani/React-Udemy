//components
import FirstComponent from './Components/FirstComponent'
import TemplateExpressions from './Components/TemplateExpressions';
import MyComponents from './Components/MyComponents';
import Events from './Components/Events';

//desafio 
import Challenge from './Components/Challenge';

//style /css
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;

