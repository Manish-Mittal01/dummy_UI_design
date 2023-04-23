import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const HorizontalCard = ({
  heading,
  description,
  imgSrc,
  index = 0,
  childComp = null,
}) => {
  const direction = index % 2 ? "row" : "row-reverse";
  return (
    <Card
      sx={{
        display: "flex",
        my: 8,
        mx: "auto",
        alignItems: "center",
        flexDirection: direction,
        flexWrap:{xs:"wrap-reverse",md:"nowrap"},
        justifyContent:"center"
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
        {/* {childComp} */}
        {childComp && <Box sx={{ ml: "auto" }}>{childComp}</Box>}
      </Box>
      <CardMedia
        component="img"
        sx={{ flexBasis: "40%", maxWidth: "35rem" }}
        image={imgSrc}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default HorizontalCard;
