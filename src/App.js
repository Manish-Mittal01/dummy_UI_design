import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import PropertySearch from "./screens/PropertySearch";
import PropertyDetail from "./screens/PropertyDetail";
import AddressAutoComplete from "./screens/AddressAutoComplete";

import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let customTheme = createTheme();
customTheme = responsiveFontSizes(customTheme);

function App() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={customTheme} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isScreenSmall={isScreenSmall} />} />
          <Route
            path="/property-search"
            element={<PropertySearch isScreenSmall={isScreenSmall} />}
          />
          <Route
            path="/property-detail"
            element={<PropertyDetail isScreenSmall={isScreenSmall} />}
          />
          <Route
            path="/address-autocomplete"
            element={<AddressAutoComplete isScreenSmall={isScreenSmall} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
