import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Damos comienzo a la cursada de React !
        </p>
        <a
          className="App-link"
          href="https://github.com/CoenAraya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis proyectos
        </a>
      </header>
    </div>
  );
}

export default App;
