import React from "react";
import CustomizedAccordions from "../../comps/Accordions";
import {  Container, Stack, Typography } from "@mui/material";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import styled from "@emotion/styled";

const GradientText = styled.span`
background: ${THEME_COLORS.GRADIENT_PRIMARY};

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
  return (
    <Container sx={{ color: THEME_COLORS.TEXT_100 }}>

      <HeroSection
        isLanding
        badgeText="Insight on 150+ million properties and owners"
        headline={headline}
        subHeading="Smart API’s with future unicorns in mind. Unlimited property data and machine-learning out of the Container. Designed for teams that want to shake up their industry."
      />
      <Stack justifyContent={"center"}>
        {/* <Typography variant="h1" color={THEME_COLORS.TEAL_100} fontSize={"6rem"} >&#8223;</Typography> */}
        <Typography variant="h1" color={THEME_COLORS.TEAL_100} fontSize={"6rem"} >&quot;</Typography>
        <quote>Hello</quote>
      </Stack>
      <CustomizedAccordions />
    </Container>
  );
};
