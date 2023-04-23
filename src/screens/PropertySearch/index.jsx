import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../comps/header";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import {
  AdvancedFilters,
  CSVGenerator,
  CompoundQueries,
  PsHeroImg,
  VisualSearch,
} from "../../assets";
import styled from "@emotion/styled";
import Footer from "../../comps/Footer";
import HorizontalCard from "../../comps/HorizontalCard";

import NorthEastIcon from "@mui/icons-material/NorthEast";
const GradientText = styled.span`
  background: ${THEME_COLORS.GRADIENT_GREEN_BLUE_TEXT};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const headline = (
  <Typography variant={"h3"} fontWeight={700} gutterBottom color={"white"}>
    Run multi-modal, complex queries in a single call.
  </Typography>
);
const LayoutData = [
  {
    title: (
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="center"
      >
        Advanced <GradientText>Filters</GradientText>
      </Typography>
    ),
    description:
      "Whether they are generating lead lists or doing academic research, users can fine tune our filters to scan for precise scenarios and use cases.",
    img: AdvancedFilters,
  },
  {
    title: (
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="center"
      >
        Visual <GradientText>Search</GradientText>
      </Typography>
    ),
    description:
      "Our polygon search puts the power in users’ hands to outline their target geo on a map.",
    img: VisualSearch,
  },
  {
    title: (
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="center"
      >
        Compound <GradientText>Queries</GradientText>
      </Typography>
    ),
    description:
      "Search multiple criteria in a single request, including Existence Checks. Give users maximum flexibility to find the properties that matter most to them.",
    img: CompoundQueries,
  },
  {
    title: (
      <Typography
        variant="h5"
        color={THEME_COLORS.TEXT_100}
        fontWeight={700}
        textAlign="center"
      >
        CSV <GradientText>Generator</GradientText>
      </Typography>
    ),
    description:
      "Once your users have searched and found the addresses they need, you can deliver to them in downloadable CSV format using our CSV Generator endpoint. You specify what fields go into the csv.",
    img: CSVGenerator,
    childComp: (
      <Button
        variant="contained"
        sx={{
          mt: 2,
          px: 2,
          py: 1,
          background: THEME_COLORS.BLUE,
          color: THEME_COLORS.WHITE,
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: THEME_COLORS.BLUE,
          },
        }}
      >
        {" "}
        Talk to Expert
        <NorthEastIcon
          fontSize="large"
          sx={{
            p: ".5rem",
            ml: ".25rem",
            borderRadius: "10px",
            color: THEME_COLORS.WHITE,
            backgroundColor: `${THEME_COLORS.WHITE}30`,
          }}
        />{" "}
      </Button>
    ),
  },
];

const PropertySearch = () => {
  return (
    <>
      <Box sx={{ background: THEME_COLORS.GRADIENT_GREEN_BLUE, mb: 5 }}>
        <Header />
        <HeroSection
          badgeText="Property Search"
          headline={headline}
          gradientColor={THEME_COLORS.GRADIENT_GREEN_BLUE}
          subHeading="REAPI's simnple query language lets you nest as many levels deep as you need to find just the properties you're looking for. Our paging system ensures that jumbo payloads don't slow down or strain your application."
          imgSrc={PsHeroImg}
        />
      </Box>
      <Container>
        <Typography
          variant="h3"
          color={THEME_COLORS.TEXT_100}
          fontWeight={700}
          textAlign="center"
        >
          Turn your customers <br />
          into super <GradientText>sleuths.</GradientText>
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

export default PropertySearch;
