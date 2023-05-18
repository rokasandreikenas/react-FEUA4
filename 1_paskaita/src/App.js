// importai viršuje
import FuncButton from "./components/FuncButton";
import "./App.css";

// apibrėžiam komponento pavadinimą, visada didžioji raidė.
// geroji praktika: Failo pavadinimas toks pat kaip komponento pavadinimas
function App() {
  const name = "Rokas";

  function getName() {
    return "Tadas";
  }

  const getSurname = () => {
    return "Tadukas";
  };

  const surname = getSurname();

  return (
    <div>
      <h1>Rokas</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Cia nespausti" />
    </div>
  );
}

// exportuojam, kad galėtume importuoti kitame faile
export default App;
