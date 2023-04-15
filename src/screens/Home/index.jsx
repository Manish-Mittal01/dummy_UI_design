import React from "react";
import CustomizedAccordions from "../../comps/Accordions";
import { Box, Typography } from "@mui/material";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import styled from "@emotion/styled";

const GradientText = styled.span`
background: linear-gradient(92.31deg, rgba(80, 20, 208, 0.31) 5.74%, rgba(114, 57, 234, 0.81) 28.17%, rgba(124, 255, 255, 0.62) 62.19%, #04C8C8 91.87%),
linear-gradient(0deg, #383E56, #383E56);

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
// TODO: Remove <br/> tags
const headline = (
  <Typography variant={"h3"} fontWeight={700} gutterBottom>
    World’s Most <br /> Expressive{" "}
    <GradientText>
      API <br />
      for building Disruptive <br />
      Prop-Tech.
    </GradientText>
  </Typography>
);

export const Home = () => {
  // TODO: check this mt 
  return (
    <Box sx={{ p: 3, m: 3, mt:8, color: THEME_COLORS.TEXT_100 }}>

      <HeroSection
        isLanding
        badgeText="Insight on 150+ million properties and owners"
        headline={headline}
        subHeading="Smart API’s with future unicorns in mind. Unlimited property data and machine-learning out of the box. Designed for teams that want to shake up their industry."
      />
      <CustomizedAccordions />
    </Box>
  );
};
