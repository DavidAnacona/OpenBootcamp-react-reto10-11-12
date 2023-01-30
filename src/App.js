import logo from './logo.svg';
import './App.css';
import ListContact from './components/containers/list_contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContact />
      </header>
    </div>
  );
}

export default App;
