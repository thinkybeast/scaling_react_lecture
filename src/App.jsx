import * as React from "react";
import { ThemeContext } from "./components/CoolContext";
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
  console.log("rendering CoolContent");
  const { theme, dispatch } = React.useContext(ThemeContext);
  return (
    <div {...props}>
      <div>
        <select
          name="colorPicker"
          id="colorPicker"
          onChange={(e) =>
            dispatch({ type: "CHANGE_THEME", theme: e.target.value })
          }
        >
          <option value={"default"}>Default</option>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
        </select>
        <button style={colorTheme[theme]} onClick={() => alert("bet")}>
          Cool
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT_PIZZA" })}>
          🍕
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_ICE_CREAM" })}>
          🍦
        </button>
      </div>
    </div>
  );
};

const CoolComponentC = (props) => {
  console.log("rendering CoolComponentA");
  return (
    <div>
      CoolComponentC
      <CoolContent {...props} />
    </div>
  );
};

const CoolComponentB = (props) => {
  console.log("rendering CoolComponentB");
  return (
    <div>
      CoolComponentB
      <CoolComponentC {...props} />
    </div>
  );
};

const CoolComponentA = (props) => {
  console.log("rendering CoolComponentA");
  return (
    <div>
      CoolComponentA
      <CoolComponentB {...props} />
    </div>
  );
};

const Main = () => {
  console.log("rendering Main");
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
  console.log("rendering Header");
  const { pizza, iceCream, dispatch } = React.useContext(ThemeContext);
  return (
    <header>
      <HeaderComponentA />
      <p>
        Current Score:{" "}
        <span onClick={() => dispatch({ type: "INCREMENT_PIZZA" })}>
          🍕: {pizza}
        </span>{" "}
        <span onClick={() => dispatch({ type: "INCREMENT_ICE_CREAM" })}>
          🍦: {iceCream}
        </span>
      </p>
    </header>
  );
};

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  console.log("rendering Footer");

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
