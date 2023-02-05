import logo from './logo.svg';
import './App.css';
import ListContact from './components/containers/list_contact';
import Clock from './retoSesiones4-5-6/componenteClase';
import ComponenteFuncional from './retoSesiones4-5-6/componenteFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<ListContact /> */}
        {/*<Clock />*/}
        <ComponenteFuncional />
      </header>
    </div>
  );
}


export default App;
