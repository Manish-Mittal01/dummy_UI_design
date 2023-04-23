import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import useColor from "../../hooks/useColor";
import { useLocation } from "react-router-dom";
import { AABannerOverlay, DefaultOverlay, PDBannerOverlay, PSBannerOverlay } from "../../assets";

const FooterOverlay = (props) => {
  const data = useColor()
  const location = useLocation();
  const getImage =()=>{
    switch (location?.pathname) {
      case "/property-search":
        return PSBannerOverlay;
  
      case "/property-detail":
        return PDBannerOverlay;

      case "/address-autocomplete":
        return AABannerOverlay;
  
      default:
        return DefaultOverlay;
    }

  } 

  return (
    <Box
      sx={{
        width: {xs:"80%",md:"60%"},
        p:3,
        borderRadius:4,
        position: "absolute",
        top: "0",
        left: "50%",
        backgroundImage: `url(${getImage()})`,
        backgroundSize: 'cover',
      backgroundPosition: 'center',
        transform: "translate(-50%,-50%)",
      }}
    >
      <Stack alignItems={"center"} gap={3}>
        <Typography variant="h5" fontWeight={700} textAlign={"center"}>
          Ready to 
          Get Started{" "}
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          Our client success team will meet face - to - face with you <br />
          every step of the way from onboarding to implementation.
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
              '&:hover': {
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
    </Box>
  );
};

export default FooterOverlay;
