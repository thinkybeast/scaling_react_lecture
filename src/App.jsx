import * as React from "react";

import "./App.css";

const colorTheme = {
  green: {
    backgroundColor: "darkolivegreen",
    color: "whitesmoke",
  },
  red: {
    backgroundColor: "salmon",
    color: "whitesmoke",
  },
  default: {
    backgroundColor: "whitesmoke",
    color: "black",
  },
};

const CoolContent = ({ theme, onColorChange, ...props }) => (
  <div {...props}>
    <select name="colorPicker" id="colorPicker" onChange={onColorChange}>
      <option value={"default"}>Default</option>
      <option value={"red"}>Red</option>
      <option value={"green"}>Green</option>
    </select>
    <button style={colorTheme[theme]} onClick={() => alert("bet")}>
      Cool
    </button>
  </div>
);

const CoolComponentC = (props) => (
  <div>
    CoolComponentC
    <CoolContent {...props} />
  </div>
);

const CoolComponentB = (props) => (
  <div>
    CoolComponentB
    <CoolComponentC {...props} />
  </div>
);

const CoolComponentA = (props) => (
  <div>
    CoolComponentA
    <CoolComponentB {...props} />
  </div>
);

const Main = ({ theme, onColorChange }) => {
  return (
    <main>
      <h1>This is my main.</h1>
      <CoolComponentA theme={theme} onColorChange={onColorChange} />
    </main>
  );
};

function App() {
  const [theme, setTheme] = React.useState("default");

  const handleColorChange = (e) => {
    e.preventDefault();
    setTheme(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header>My React Site! 🐶</header>
      <Main theme={theme} onColorChange={handleColorChange} />
      <footer>Welcome to Foot.</footer>
    </div>
  );
}

export default App;
