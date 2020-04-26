import React from "react";
import {
  Card as MCard,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import "./Card.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Card.module.css";
export function Card({
  title,
  value,
  lastUpdate,
  description = " Number of active cases of COVID-19",
  ...rest
}) {
  return (
    <Grid
      item
      component={MCard}
      xs={12}
      md={3}
      className={cx(styles.container)}
      {...rest}
    >
      <CardContent className={cx(styles.card)}>
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
