// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import TabContent from "./components/TabContent.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function onSelectTab(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              onSelectTab={() => onSelectTab("components")}
              label="Components"
              isSelected={selectedTopic === "components"}/>
            <TabButton 
              onSelectTab={() => onSelectTab("jsx")} 
              label="JSX" 
              isSelected={selectedTopic === "jsx"}/>
            <TabButton 
              onSelectTab={() => onSelectTab("props")} 
              label="Props" 
              isSelected={selectedTopic === "props"}/>
            <TabButton 
              onSelectTab={() => onSelectTab("state")} 
              label="State" 
              isSelected={selectedTopic === "state"}/>
          </menu>
          <TabContent topic={selectedTopic} />
        </section>
      </main>
    </div>
  );
}

export default App;
