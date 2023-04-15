import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { THEME_COLORS } from "../../lib/colors";
import { Box } from "@mui/material";
// import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderRadius:"10px",
  // border: `1px solid ${theme.palette.divider}`,
  background: THEME_COLORS.WHITE,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const BottomBorder = styled(Box)`
  height:6px;
  margin-left:15px;
  background:${THEME_COLORS.LIGHTGREY};
  border-radius:0px 0px 10px 10px;
  position:relative;
`;
// Header
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary 
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" ,color:THEME_COLORS.TEXT_100 }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: THEME_COLORS.WHITE,
  border: "none",
  // flexDirection: "row-reverse",
  // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
  //   transform: "rotate(90deg)",
  // },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
// BOdy
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const data = [
  {
    title: "Interrogate the data",
    summary:
      "Whether you’re looking for needles or haystacks, our Search API lets you (and your customers) slice through mountains of data to find properties that fit the most strict criteria.",
    expandKey: "panel1",
    imgSrc: "",
  },
  {
    title: "Build killer map apps",
    summary:
      "Get parcel boundaries in GEO JSON format. Implement quickly to design apps that render detailed info about clusters of properties dynamically. With zero latency!",
    expandKey: "panel2",
    imgSrc: "",
  },
  {
    title: "Move beyond information to insight",
    summary:
      "With access to current and historical MLS, mortgage and lien data, you’ll have your finger on the pulse of every property in the country. Use it to train A.I. models that forecast what happens next.",
    expandKey: "panel3",
    imgSrc: "",
  },
  {
    title: "Layer in property owner data",
    summary:
      "Our demographic datasets connect the home to the homeowner. Our contact database provides current phone, email and social media coordinates so you can reach a decision maker.",
    expandKey: "panel4",
    imgSrc:
      "Our demographic datasets connect the home to the homeowner. Our contact database provides current phone, email and social media coordinates so you can reach a decision maker.",
  },
];

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((accordionData) => (
        <Accordion
          key={accordionData.expandKey}
          expanded={expanded === accordionData.expandKey}
          onChange={handleChange(accordionData.expandKey)}
        >
          <AccordionSummary
            aria-controls={`${accordionData.expandKey}d-content`}
            id={`${accordionData.expandKey}d-header`}
          >
            <Typography
              sx={{ color: THEME_COLORS.TEXT_100, fontWeight: "700" }}
            >
              {accordionData.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={THEME_COLORS.TEXT_100} >{accordionData.summary}</Typography>
          </AccordionDetails>
          <BottomBorder>
            <div
              style={{
                position: "absolute",
                left:0,
                top:0,
                bottom:0,
                background:THEME_COLORS.GRADIENT_PRIMARY,
                borderRadius: "0px 10px 10px 10px",
                width:"60%"  
              }}
            />
          </BottomBorder>
        </Accordion>
      ))}
    </div>
  );
}
