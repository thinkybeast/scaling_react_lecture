import * as React from "react";
import { ThemeContext } from "./components/ColorThemeProvider";
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

const CoolContent = ({ ...props }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div {...props}>
      <select
        name="colorPicker"
        id="colorPicker"
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value={"default"}>Default</option>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
      </select>
      <button style={colorTheme[theme]} onClick={() => alert("bet")}>
        Cool
      </button>
    </div>
  );
};

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

const Main = () => {
  return (
    <main>
      <h1>This is my main.</h1>
      <CoolComponentA />
    </main>
  );
};

const HeaderComponentA = () => {
  const { theme } = React.useContext(ThemeContext);

  return <div style={colorTheme[theme]}>My React Site! 🐶</div>;
};

const Header = () => {
  return (
    <header>
      <HeaderComponentA />
    </header>
  );
};

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  return <footer style={colorTheme[theme]}>Welcome to Foot.</footer>;
};

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
