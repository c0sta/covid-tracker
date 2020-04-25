import React from "react";
import { fetchDailyData } from "../../services/api";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import cx from "classnames";
export function Chart(props) {
  const [dailyData, setDailyData] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      setDailyData(await fetchDailyData());
    };
    fetch();
  }, []);

  if (!dailyData) return "Loading...";
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infecteds",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      className={cx(styles.chart)}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}

Chart.propTypes = {};
