import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Button Component",
    description: "A simple reusable button component with a primary style.",
    code: `
        import React from 'react';
  
        const Button = ({ label, onClick }) => {
          return (
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
              onClick={onClick}
            >
              {label}
            </button>
          );
        };
  
        export default Button;
      `,
  },
  jsx: {
    title: "JSX Example",
    description: "Illustrates JSX syntax with dynamic values and expressions.",
    code: `
        const name = "Naved";
        const element = <h1>Hello, {name}!</h1>;
  
        // Rendered output:
        // <h1>Hello, Naved!</h1>
      `,
  },
  props: {
    title: "Props Example",
    description: "Passing and using props inside a functional React component.",
    code: `
        const Greeting = ({ user, age }) => {
          return (
            <p>
              Welcome {user}, you are {age} years old.
            </p>
          );
        };
  
        // Usage:
        <Greeting user="Alice" age={28} />
      `,
  },
  state: {
    title: "State Example",
    description: "Managing local component state with useState hook.",
    code: `
        import React, { useState } from 'react';
  
        const Counter = () => {
          const [count, setCount] = useState(0);
  
          return (
            <div>
              <p>Current Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
        };
  
        export default Counter;
      `,
  },
  default: {
    title: "Please select a tab",
    description: "",
    code: ""
  }
};
