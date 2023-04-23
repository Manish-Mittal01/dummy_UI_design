import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import PropertySearch from "./screens/PropertySearch";
import PropertyDetail from "./screens/PropertyDetail";
import AddressAutoComplete from "./screens/AddressAutoComplete";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-search" element={<PropertySearch />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
        <Route path="/address-autocomplete" element={<AddressAutoComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
