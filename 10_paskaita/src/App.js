import { Routes, Route } from "react-router-dom";
import Test from "./Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/keglis" element={<Test />} />
    </Routes>
  );
};

export default App;
