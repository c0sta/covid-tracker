import React from "react";
import {
  Card as MCard,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import "./Card.module.css";
import CountUp from "react-countup";

export function Card({
  title,
  value,
  lastUpdate,
  description = " Number of active cases of COVID-19",
}) {
  return (
    <Grid item component={MCard}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={1.5} separator="." />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
}

Card.propTypes = {};
