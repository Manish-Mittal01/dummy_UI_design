import { Container, Chip, Typography, Stack, Button, Box } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import React from "react";
import { THEME_COLORS } from "../../lib/colors";
import useColor from "../../hooks/useColor";

const HeroSection = ({
  gradientColor = null,
  isLanding = false,
  badgeText = "ASD",
  subHeading = "",
  headline,
  imgSrc = null,
}) => {
  const data = useColor();
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
        <Stack alignItems="start" flexBasis={"80%"} >
          <Chip sx={chipStyle} label={badgeText} />
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            {" "}
            <img src={imgSrc} alt="Hero img" width={"100%"} height={"auto"} />
          </Box>
          {headline}
          <Typography
            variant="body1"
            my={3}
            color={!isLanding && THEME_COLORS.WHITE}
          >
            {" "}
            {subHeading}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              px: 2,
              py: 1,
              background: data.actionBtnBg,
              color: data.actionBtColor,
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: data.actionBtnBg,
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
                color: data.actionBtColor,
                backgroundColor: `${data.actionBtColor}30`,
              }}
            />{" "}
          </Button>
        </Stack>
        <Box flexBasis={"100%"} sx={{ display: {xs:"none", sm: "none", md: "flex" } , justifyContent:"center", alignItems:"center" }}>
          <img src={imgSrc} alt="Hero img" width={"100%"} height={"auto"} />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
