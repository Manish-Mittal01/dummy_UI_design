import { Container, Chip, Typography, Stack, Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import React from "react";
import { THEME_COLORS } from "../../lib/colors";

const HeroSection = ({
  gradientColor = null,
  isLanding = false,
  badgeText = "ASD",
  subHeading = "",
  headline,
  imgSrc=null
}) => {
  const chipStyle = isLanding
    ? {
        color: THEME_COLORS.TEAL,
        background: `${THEME_COLORS.TEAL}15`,
        fontWeight: 500,
        mb: 2,
      }
    : {
        color: THEME_COLORS.WHITE,
        background: `${THEME_COLORS.WHITE}35`,
        fontWeight: 500,
        mb: 2,
      };
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Stack alignItems="start">
          <Chip sx={chipStyle} label={badgeText} />
          {headline}
          <Typography variant="body1" my={3} color={!isLanding && THEME_COLORS.WHITE}>
            {" "}
            {subHeading}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              px: 2,
              py: 1,
              background: THEME_COLORS.PRIMARY,
              borderRadius: "15px",
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
                backgroundColor: `${THEME_COLORS.WHITE}30`,
              }}
            />{" "}
          </Button>
        </Stack>
        <img src={imgSrc} alt="Hero img" width={"55%"} />
      </Stack>
    </Container>
  );
};

export default HeroSection;
