import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../comps/header";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import { PsHeroImg, dummy } from "../../assets";
import styled from "@emotion/styled";
import Footer from "../../comps/Footer";

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
    img: dummy,
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
    img: dummy,
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
    img: dummy,
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
    img: dummy,
  },
];

const HorizontalCard = ({ heading, description, imgSrc, index=0 }) => {
  const direction =index % 2 ? "row" : "row-reverse"
  return (
    <Card
      sx={{
        display: "flex",
        my: 8,
        mx: "auto",
        alignItems: "center",
        flexDirection: direction ,
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          {heading}
          <Typography variant="subtitle1" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ flexBasis: "40%" }}
        image={imgSrc}
        alt="Live from space album cover"
      />
    </Card>
  );
};

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
            heading={el.title}
            description={el.description}
            imgSrc={el.img}
            index={index}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default PropertySearch;
