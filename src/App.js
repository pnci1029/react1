import logo from './logo.svg';
import './App.css';
import './data.js';
import {CORE_CONCEPTS} from "./data";
const reactDescriptions = ['React', 'Java', 'Python']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
      <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>This is Header</h1>
        <p>
          {description} Component concepts you will need
          for almost any app you are going to build!
        </p>
      </header>
  )
}

function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3> {title}</h3>
            <p>{description}</p>
        </li>
    );
}


function App() {
    return (
        <div >
            <Header/>
            <main>
                <section id="core-concepts">
                    <ul>
                        <CoreConcept
                            title = {CORE_CONCEPTS[0].title}
                            description = {CORE_CONCEPTS[0].description}
                            image = {CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>

                </section>
            </main>
        </div>
    );
}

export default App;
