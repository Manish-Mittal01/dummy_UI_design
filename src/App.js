import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import PropertySearch from "./screens/PropertySearch";
import PropertyDetail from "./screens/PropertyDetail";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-search" element={<PropertySearch />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
