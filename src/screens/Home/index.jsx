import React from "react";
import CustomizedAccordions from "../../comps/Accordions";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ p: 3,m:3 }}>
      Home Page
      <CustomizedAccordions />
    </Box>
  );
};
