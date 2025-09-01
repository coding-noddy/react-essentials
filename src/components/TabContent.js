import { EXAMPLES } from "../data.js";
import "./TabContent.css";

export default function TabContent({ topic }) {
  const { title, description, code } = EXAMPLES[topic];

  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
