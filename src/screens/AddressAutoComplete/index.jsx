import { Box,  Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../comps/header";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import {
  AAHero,
  Connected,
  Consistency,
  Free,
} from "../../assets";
import styled from "@emotion/styled";
import Footer from "../../comps/Footer";
import HorizontalCard from "../../comps/HorizontalCard";

// import NorthEastIcon from "@mui/icons-material/NorthEast";
const GradientText = styled.span`
  background: ${THEME_COLORS.GRADIENT_RED_ORANGE_TEXT};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const headline = (
  <Typography variant={"h3"} fontWeight={700} gutterBottom color={"white"}>
    Address Auto-complete API slashes data entry (and re-entry) times.
  </Typography>
);
const LayoutData = [
  {
    title: (
      <>
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        // textAlign="center"
      >
        <GradientText>Reason 1</GradientText>
      </Typography>
      <Typography
        variant="h4"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        // textAlign="center"
      >
        Consistency
      </Typography>
      </>
    ),
    description:
      "Every one of the 150M+ properties in our database has a unique ID. When our autocomplete API resolves an address it is tagged with that ID. This ID is a consistent identifier across all our APIs and data sets.",
    img: Consistency,
  },
  {
    title: (
      <>
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="right"
      >
        <GradientText>Reason 2</GradientText>
      </Typography>
      <Typography
        variant="h4"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="right"
      >
        Connected
      </Typography>
      </>
    ),
    description:
      "Our REAPI ID sits at the top of the waterfall and connects the subject property to every data set that lies downstream. This ensures 100% fidelity and safeguards against disconnected third-party APIs appending inaccurate or out-of-date property information.",
    img: Connected,
  },
  {
    title: (
      <>
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        // textAlign="center"
      >
        <GradientText>Reason 3</GradientText>
      </Typography>
      <Typography
        variant="h4"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        // textAlign="center"
      >
        It's Free
      </Typography>
      </>
    ),
    description:
      "All REAPI Subscriptions come with unlimited access to our Complete and Confirm API.",
    img: Free,
  },
 
];

const AddressAutoComplete = () => {
  return (
    <>
      <Box sx={{ background: THEME_COLORS.GRADIENT_RED_ORANGE, mb: 5 }}>
        <Header />
        <HeroSection
          badgeText="Address AutoComplete"
          headline={headline}
          gradientColor={THEME_COLORS.GRADIENT_RED_ORANGE}
          subHeading="If the address is wrong, every data dot you connect to it is also wrong."
          imgSrc={AAHero}
        />
      </Box>
      <Container>
        <Typography
          variant="h3"
          color={THEME_COLORS.TEXT_100}
          fontWeight={700}
          textAlign="center"
        >
          3 reasons you should use <br />
           <GradientText>REAPI's Auto-complete API</GradientText> to
          build your application.
        </Typography>
        {LayoutData.map((el, index) => (
          <HorizontalCard
            key={el.title}
            heading={el.title}
            description={el.description}
            imgSrc={el.img}
            index={index}
            childComp={el?.childComp}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default AddressAutoComplete;
