import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import homeStyles from "../../../theme/homeStyles";

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Solving world problems through various web applications using efficient programs and tools",
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Through team work, we collaborate and deliver quality projects of high standards",
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: "Flexible payment plan is applicable to all our services",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Grid container sx={homeStyles.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={2.8}
            minHeight={300}
            key={item.id}
            sx={homeStyles.sectionGridItem}
          >
            <br />
            {item.icon}
            <br/>
            <br/>
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
