import React from "react";
import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./services/api";
import "./App.module.css";

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetch = () =>
      fetchData().then(
        (data) => setData({ ...data, data }) & console.log("App log: ", data)
      );
    fetch();
  }, []);
  return (
    <div className="container">
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
