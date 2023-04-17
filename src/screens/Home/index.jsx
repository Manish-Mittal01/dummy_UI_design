import React from "react";
import CustomizedAccordions from "../../comps/Accordions";
import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import HeroSection from "../../comps/HeroSection";
import { THEME_COLORS } from "../../lib/colors";
import styled from "@emotion/styled";
import { DoubleQuote } from "../../assets";
import { apiData,serviceApis,bulkApis,reapiSectionData } from "../../lib/homeData";
import Footer from "../../comps/Footer";


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

const ApiDataShowcase = ({ title, arr = [], flexBasis = "100%" }) => (
  <Stack flexBasis={flexBasis}>
    <Typography variant="h5" my={5} fontWeight={700} textAlign={"center"}>
      {title}
    </Typography>
    <Stack direction={"row"} justifyContent={"space-between"}>
      {arr.map((el) => (
        <Stack direction={"column"} alignItems={"center"}>
          <img
            src={el.src}
            alt={el.text}
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />
          <Typography variant="body1" fontWeight={700} textAlign={"center"}>
            {el.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
);

const ReapiCard = ({ src, title, description }) => (
  <Card sx={{ maxWidth: 275, mb: 5 }} elevation={0}>
    {/* <CardMedia sx={{ height:"1rem", maxHeight:"100px"}} image={src} title={title} /> */}
    <CardContent>
      <img src={src} alt={title} />
      <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export const Home = () => {
  return (
    <>
    <Container sx={{ color: THEME_COLORS.TEXT_100 }}>
      <HeroSection
        isLanding
        badgeText="Insight on 150+ million properties and owners"
        headline={headline}
        subHeading="Smart API’s with future unicorns in mind. Unlimited property data and machine-learning out of the Container. Designed for teams that want to shake up their industry."
      />
      <Stack
        sx={{
          width: "90%",
          position: "relative",
          height: "65vh",
          m: "auto",
          my: 3,
        }}
        justifyContent={"center"}
      >
        {/* <Typography variant="h1" color={THEME_COLORS.TEAL_100} fontSize={"6rem"} >&#8223;</Typography> */}
        <img
          style={{ position: "absolute", opacity: ".2", zIndex: 1, top: 0 }}
          src={DoubleQuote}
          alt="DoubleQuote"
          height={"auto"}
        />
        <Typography
          variant="body1"
          textAlign={"center"}
          fontWeight={500}
          fontStyle={"italic"}
          // fontSize={"30px"}
          mb={3}
        >
          In just a few months, we were able to build from scratch a platform
          that now competes with a publicly traded company.{" "}
          <span style={{ fontWeight: 600 }}>
            That would’ve never been possible without the flexibility of the
            REAPI data warehouse.
          </span>
        </Typography>
        <Typography
          variant="body2"
          textAlign={"center"}
          fontWeight={600}
          // fontSize={"25px"}
        >
          T. Clark
        </Typography>
      </Stack>
      {/* TODO: add Gear png  */}
      <Box sx={{ width: "60%", m: "auto" }}>
        <Typography
          mt={8}
          textAlign={"center"}
          variant={"h3"}
          fontWeight={700}
          gutterBottom
        >
          Develop products and{" "}
          <GradientText>features that will wow your customers.</GradientText>
        </Typography>
      </Box>
      <CustomizedAccordions />
      <Stack>
        <Typography
          mt={8}
          textAlign={"center"}
          variant={"h1"}
          fontWeight={700}
          gutterBottom
        >
          More Than <br />
          <GradientText>Just An API</GradientText>
        </Typography>
        <Typography
          mx={"auto"}
          mb={3}
          // fontSize={"25px"}
          textAlign={"center"}
          variant={"overline"}
        >
          A fully Integrated System
        </Typography>
        <Typography
          mx={"auto"}
          // fontSize={"25px"}
          textAlign={"center"}
          variant={"body1"}
          paragraph
        >
          REAPI was purpose built for application developers like you. Our
          family of APIs does more than just fetch data. We’ve done a lot of
          work under the hood to ensure your app can retrieve and manipulate
          data in real-time, without sacrificing performance. We obsess over the
          gnarly details of cleaning, normalizing and transforming data so you
          can create engaging UI that users love.
        </Typography>
        <Typography
          mx={"auto"}
          // fontSize={"25px"}
          textAlign={"center"}
          variant={"body1"}
          paragraph
        >
          Choose from a comprehensive offering of endpoints or ask our team to
          build you a custom endpoint with the complexity your app needs to set
          it apart from the competition.
        </Typography>
      </Stack>
      <ApiDataShowcase title={"Data Fetching APIs"} arr={apiData} />

      <Stack direction={"row"} mb={10} justifyContent={"space-between"}>
        <ApiDataShowcase
          title={"Service APIs"}
          arr={serviceApis}
          flexBasis={"55%"}
        />
        <ApiDataShowcase
          title={"Bulk Processing APIs"}
          arr={bulkApis}
          flexBasis={"35%"}
        />
      </Stack>
      <Typography variant="h5" fontWeight={600}>
        <GradientText>Why REAPI</GradientText>
      </Typography>
      <Typography variant="h4" fontWeight={600}>
        Do more. Build faster. Spend less.
      </Typography>
      <Stack my={5} justifyContent={"space-between"} direction={"row"}>
        {reapiSectionData.map((el) => (
          <ReapiCard
            src={el.src}
            title={el.title}
            description={el.description}
          />
        ))}
      </Stack>
    </Container>
      <Footer/>
      </>
  );
};
