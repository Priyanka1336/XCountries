import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import axios from "axios";
import "./Grid.css";

export default function Grid1() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  //   const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        // setisLoading(true);
        const response = await axios.get(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        setData(response.data);
        // setisLoading(false);
      } catch (error) {
        console.error("Error fetching data:");
      }
    };
    getData();
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const filteredData = data.filter((flagData) =>
    flagData.common.toLowerCase().includes(country.toLowerCase())
  );

  console.log(data);
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     {data.map((flagData, index) => (
    //       <Grid item xs={2} key={index}>
    //         <Card data={flagData} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    <div>
      <input
        type="text"
        placeholder="Search for Countries"
        value={country}
        onChange={handleChange}
        style={{ width: "60vw", height: "5vh" }}
      />
      <div className="grid">
        {filteredData.length > 0 ? (
          filteredData.map((flagData) => (
            <Card key={flagData.common} data={flagData} />
          ))
        ) : (
          <h3>No countries found</h3>
        )}
      </div>
    </div>
  );
  //   isLoading ? (
  // <h1>Loading Flags </h1>
  //   ) : (
}
