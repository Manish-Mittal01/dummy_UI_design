import "./App.css";
import Header from "./comps/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      Hello
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
