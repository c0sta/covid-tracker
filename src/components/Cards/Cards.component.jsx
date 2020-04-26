import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "../index";
import styles from "./Cards.module.css";
import cx from "classnames";

export function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  // console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={3}
        className={cx(styles.cards)}
        justify="space-around"
      >
        <Card
          title="Confirmed cases"
          value={confirmed.value}
          description="Number of confirmed cases"
          lastUpdate={lastUpdate}
          className={cx(styles.infected)}
        />
        <Card
          title="Recovered cases"
          value={recovered.value}
          description="Number of recovered cases"
          lastUpdate={lastUpdate}
          className={cx(styles.recovered)}
        />
        <Card
          title="Deaths"
          value={deaths.value}
          description="Number of deaths"
          lastUpdate={lastUpdate}
          className={styles.deaths}
        />
      </Grid>
    </div>
  );
}

Cards.propTypes = {};
