import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { width } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (data) => (
  <React.Fragment>
    <CardContent>
      {/* <img sx={{ height: "50px", width: "50px" }} src={data.flag} /> */}
      <Box
        component="img"
        src={data.flag}
        alt={data.name}
        sx={{ height: "50px", width: "50px" }}
      />
      <Typography gutterBottom variant="h5">
        {data.name}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ data }) {
  return (
    <Box>
      <Card variant="outlined">{card(data)}</Card>
    </Box>
  );
}
