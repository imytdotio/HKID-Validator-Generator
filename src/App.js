import "./App.css";
import { Validator } from "./Components/Validator";
import { Generator } from "./Components/Generator";

function App() {
  return (
    <div className="App">
      <h1>HKID Validator</h1>
      <Validator />
      <h1>HKID Generator</h1>
      <Generator />
    </div>
  );
}

export default App;
