import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click me!";

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
      <h3>Curernt time:</h3>
      <h4> {new Date().toLocaleTimeString()}</h4>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
