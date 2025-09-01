import { useState } from "react";

import TabButton from "./TabButton.js";
import TabContent from "./TabContent.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function onSelectTab(topic) {
    setSelectedTopic(topic);
  }

  return (
    <section id="examples">
      <menu>
        <TabButton
          onSelectTab={() => onSelectTab("components")}
          label="Components"
          isSelected={selectedTopic === "components"}
        />
        <TabButton
          onSelectTab={() => onSelectTab("jsx")}
          label="JSX"
          isSelected={selectedTopic === "jsx"}
        />
        <TabButton
          onSelectTab={() => onSelectTab("props")}
          label="Props"
          isSelected={selectedTopic === "props"}
        />
        <TabButton
          onSelectTab={() => onSelectTab("state")}
          label="State"
          isSelected={selectedTopic === "state"}
        />
      </menu>
      <TabContent topic={selectedTopic} />
    </section>
  );
}
