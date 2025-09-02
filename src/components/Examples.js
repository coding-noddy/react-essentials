import { useState } from "react";
import Tabs from "./Tabs.js";
import TabButton from "./TabButton.js";
import TabContent from "./TabContent.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function onSelectTab(topic) {
    setSelectedTopic(topic);
  }

  return (
    <section id="examples">
      <Tabs
        ButtonWrapper="menu"
        Buttons={
          <>
            <TabButton
              onClick={() => onSelectTab("components")}
              label="Components"
              isSelected={selectedTopic === "components"}
            />
            <TabButton
              onClick={() => onSelectTab("jsx")}
              label="JSX"
              isSelected={selectedTopic === "jsx"}
            />
            <TabButton
              onClick={() => onSelectTab("props")}
              label="Props"
              isSelected={selectedTopic === "props"}
            />
            <TabButton
              onClick={() => onSelectTab("state")}
              label="State"
              isSelected={selectedTopic === "state"}
            />
          </>
        }
      >
        {<TabContent topic={selectedTopic}></TabContent>}
      </Tabs>
      {/* <Tabs
        Buttons=
      ></Tabs> */}
    </section>
  );
}
