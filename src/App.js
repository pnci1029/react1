import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './data.js';
import {CORE_CONCEPTS} from "./data";
import {EXAMPLES} from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please Click a Button.</p>;

    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
            </div>
    }

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
                        {CORE_CONCEPTS.map((concept) =>
                            <CoreConcept key={concept.title} {...concept}/>
                        )}
                    </ul>

                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'}
                                   onSelect={() => handleSelect('components')}
                        >Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}
                                   onSelect={() => handleSelect('jsx')}
                        >JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}
                                   onSelect={() => handleSelect('props')}
                        >Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'}
                                   onSelect={() => handleSelect('state')}
                        >State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
