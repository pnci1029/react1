import logo from './logo.svg';
import './App.css';
const reactDescriptions = ['React', 'Java', 'Python']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
      <header>
        <h1>This is Header</h1>
        <p>
          {description} Component concepts you will need
          for almost any app you are going to build!
        </p>
      </header>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
