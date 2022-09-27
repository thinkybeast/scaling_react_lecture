import * as React from "react";

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

const initialState = {
  theme: "default",
  pizza: 0,
  iceCream: 0,
};

const coolReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.theme };
    case "INCREMENT_PIZZA":
      const currentPizzaCount = state.pizza;
      return { ...state, pizza: currentPizzaCount + 1 };
    case "INCREMENT_ICE_CREAM":
      const currentIceCreamCount = state.iceCream;
      return { ...state, iceCream: currentIceCreamCount + 1 };
    default:
      throw new Error("Bad action type", action.type);
  }
};

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(coolReducer, initialState);

  return (
    <ThemeContext.Provider value={{ dispatch, ...state }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
