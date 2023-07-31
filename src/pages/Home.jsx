import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, colors } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function OutlinedCard() {
  const [data, setUserData] = useState([]);

  useEffect(() => {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4MDYzNTMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNzMwNjQwYjMtZWRiZC00Njg1LThjMzItMGRkMDIyMDJhMjQ5Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjE2NyJ9.MKbm1WBKHZhT8q67RHaG9JTXV4ti0rYoSrnoHTWC6Hs";

    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    axios
      .get("http://20.244.56.144/train/trains", { headers })
      .then((response) => {
        setUserData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "grey" }}>
            <Typography variant="h4" component="div">
              Train Tracking
            </Typography>
            <br />
            <Grid container spacing={1} justifyContent="center">
              {data.map((train, index) => (
                <Grid item xs={10} key={index}>
                  <Paper>
                    <Typography variant="h7" component="div">
                      Train Details
                    </Typography>
                    <br />
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Train Name</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.trainName}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Train Number</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.trainNumber}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Typography variant="h7" component="div">
                      Timing Details
                    </Typography>
                    <br />
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Timing</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.departureTime.Hours}-
                            {train.departureTime.Minutes}-
                            {train.departureTime.Seconds}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Delay</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.delayedBy}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Typography variant="h7" component="div">
                      Seats
                    </Typography>
                    <br />
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Sleeper</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.seatsAvailable.sleeper}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>3AC</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{
                              fontWeight: 200,
                              color: "gray",
                            }}
                          >
                            {train.seatsAvailable.AC}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Typography variant="h7" component="div">
                      Price
                    </Typography>
                    <br />
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>Sleeper</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.price.sleeper}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper>
                          <Typography>3AC</Typography>
                          <Typography
                            variant="h7"
                            component="div"
                            style={{ fontWeight: 200, color: "gray" }}
                          >
                            {train.price.AC}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
