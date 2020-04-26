import React from "react";
import { fetchDailyData } from "../../services/api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
export function Chart({ data: { confirmed, recovered, deaths }, country }) {
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
    />
  ) : null;
  console.log(confirmed, recovered, deaths);
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}

Chart.propTypes = {};
