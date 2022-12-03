import "./App.css";
import About from "./About";
import Setting from "./setting";
import Toggle from "./toggle";
import Counter from "./Counter";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/toggle" element={<Toggle />}></Route>
        </Routes>
        <Counter />
      </div>
      ;
    </Router>
  );
}

export default App;
