import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../comps/header";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import {
  Analysis,
  Analytic,
  Deployment,
  Expense,
  GraphPD,
  Project,
  PsHeroImg,
} from "../../assets";
import styled from "@emotion/styled";
import Footer from "../../comps/Footer";
import { NorthEast } from "@mui/icons-material";

const GradientText = styled.span`
  background: ${THEME_COLORS.GRADIENT_GREEN_BLUE_TEXT};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const headline = (
  <Typography variant={"h3"} fontWeight={700} gutterBottom color={"white"}>
    Comprehensive Data on 157M US properties.
  </Typography>
);
const LayoutData = [
  {
    title: "Property Specs",
    description:
      "Structural details like Sq footage, BR/BA count, Building materials, Lot Size, Land Use type, Subdivision Name, Vacancy Flag, owner name and mailing address and much more.",
    img: Deployment,
  },
  {
    title: "MLS Data",
    description:
      "Critical data on listed properties including Date Listed, List Price, Sale Price, Days on market, Pending and cancellations statuses, and agent name.",
    img: Analytic,
  },
  {
    title: "Sale History",
    description:
      "Get sales prices and dates as well as means of transfer (Cash sale, inherited etc). Response object includes an array of current comparable sales. *Comps can be called seprately via our Comps API.",
    img: GraphPD,
  },
  {
    title: "Tax Data",
    description:
      "Assessed Value, Annual property tax amount, Date of last assessment by county assessor as well as any exemptions.",
    img: Expense,
  },
  {
    title: "Mortgage",
    description:
      "See details about the current financing, including loan amount, lender name, mortgage type (fixed, ARM), int rate, loan term and much more.",
    img: Analysis,
  },
  {
    title: "Foreclosure Data",
    description:
      "Institutional grade FC and pre-foreclosure info, incl existence of Notice of Default, Date of Lis Pendens filing, Foreclosure Judgment Date, Bank Name",
    img: Project,
  },
];

const CustomCard = ({ src, title, description }) => (
  <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 275, mb: 5 }} elevation={0}>
      {/* <CardMedia sx={{ height:"1rem", maxHeight:"100px"}} image={src} title={title} /> */}
      <CardContent>
        <img src={src} alt={title} />
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActionArea>
        <Button size="small" >
          Explore <NorthEast />
        </Button>
      </CardActionArea>
    </Card>
  </Grid>
);

const PropertyDetail = () => {
  return (
    <>
      <Box sx={{ background: THEME_COLORS.GRADIENT_PURPLE_TEAL, mb: 5 }}>
        <Header />
        <HeroSection
          badgeText="Property Detail"
          headline={headline}
          gradientColor={THEME_COLORS.GRADIENT_PURPLE_TEAL}
          subHeading="Our Property Detail API gives you the physical specs (Square footage, Lot size, bed/bath count etc) and financial details (tax, mortgage and liens) on every parcel in the US. More than 200 fields on each address in our warehouse."
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
        <Grid container spacing={2} alignItems="center">
          {LayoutData.map((el) => (
            <CustomCard
              title={el.title}
              description={el.description}
              src={el.img}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyDetail;
