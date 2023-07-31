import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));
const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="div">
          Train Tracking
        </Typography>
        <br></br>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={10}>
            <Item>
              <Typography variant="h7" component="div">
                Train Details
              </Typography>
              <br></br>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography>Train Name</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      Chennai Exp
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Typography>Train Number</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      2344
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Typography variant="h7" component="div">
                Timing Details
              </Typography>
              <br></br>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography>Timing</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      21:35:00
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Typography>Delay</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      15
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Typography variant="h7" component="div">
                Seats
              </Typography>
              <br></br>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography>Sleeper</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      3
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Typography>3AC</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      1
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Typography variant="h7" component="div">
                Price
              </Typography>
              <br></br>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography>Sleeper</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      2
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <Typography>3AC</Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      style={{ fontWeight: 200, color: "gray" }}
                    >
                      5
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
