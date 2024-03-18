import { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './data.js';
import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    let tabContent = 'Please click a button';

    function handleSelect(selectedButton) {
        // selectedButton -> 'components', 'jsx' ...
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>

                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
