import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import axios from "axios";
import "./Grid.css";

export default function Grid1() {
  const [data, setData] = useState([]);
  //   const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        // setisLoading(true);
        const response = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        setData(response.data);
        // setisLoading(false);
      } catch (error) {
        console.error("Error catching data:");
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map((flagData, index) => (
          <Grid item xs={2} key={index}>
            <Card data={flagData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
  //   isLoading ? (
  // <h1>Loading Flags </h1>
  //   ) : (
}
