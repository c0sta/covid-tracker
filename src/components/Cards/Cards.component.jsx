import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "../index";
import styles from "./Cards.module.css";

export function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          title="Confirmed cases"
          value={confirmed.value}
          description="Number of confirmed cases"
          lastUpdate={lastUpdate}
        />
        <Card
          title="Recovered cases"
          value={recovered.value}
          description="Number of recovered cases"
          lastUpdate={lastUpdate}
        />
        <Card
          title="Deaths"
          value={deaths.value}
          description="Number of deaths"
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
}

Cards.propTypes = {};
