import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Divider } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { FooterLogo } from "../../assets";
import { THEME_COLORS } from "../../lib/colors";
import { Container, Stack, Typography } from "@mui/material";
import FooterOverlay from "./FooterOverlay";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: THEME_COLORS.BLACK,
    color: THEME_COLORS.WHITE,
    padding: theme.spacing(6),
    paddingTop: "15rem",
    marginTop: "15rem",
  },
  logo: {
    height: 40,
  },
  divider: {
    background: THEME_COLORS.GRADIENT_GREY,
    border: `2px solid ${THEME_COLORS.GRADIENT_GREY}`,
    margin: "1rem 0",
  },
  linkList: {
    color: THEME_COLORS.WHITE,
    display: "flex",
    flexDirection: "column",
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FooterOverlay/>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <img src={FooterLogo} alt="Logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" mb={2}>
              Solutions
            </Typography>
            <div className={classes.linkList}>
              <Link href="#">Property Search</Link>
              <Link href="#">Property Detail</Link>
              <Link href="#">Bulk Property Detail</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ mt: 2 }}>
            <div className={classes.linkList}>
              <Link href="#">Property Comps</Link>
              <Link href="#">Property Boundary</Link>
              <Link href="#">Autocomplete</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
            <div className={classes.linkList}>
              <Link href="#">CSV Generator</Link>
              <Link href="#">Skip Trace</Link>
              <Link href="#">Bulk Skip Trace</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
          <p>&copy; 2023 RealEstateAPI.com. All rights reserved.</p>
          <div style={{ marginLeft: "auto" }} className={classes.socialIcons}>
            <Facebook className={classes.icon} />
            <Twitter className={classes.icon} />
            <Instagram className={classes.icon} />
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
