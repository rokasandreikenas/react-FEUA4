// importas is react
import { createContext } from "react";
import Toolbar from "./components/Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
// Sukuriamas context kintamasis su pradine reikšme createContext(themes.light)
export const ThemeContext = createContext(themes.light);

const App = () => {
  //  <ThemeContext.Provider value={themes.dark}> užwrappinam komponentą kuris turės parametrus (paveldi ir vaikai)
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;
