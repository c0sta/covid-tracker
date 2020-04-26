import React from "react";
import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./services/api";
import "./App.module.css";

function App() {
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState("");

  React.useEffect(() => {
    const fetch = () =>
      fetchData().then(
        (data) => setData({ ...data, data }) & console.log("App log: ", data)
      );

    fetch();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCountry(country);
    setData(fetchedData);
    console.log(fetchedData);
  };

  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} />
    </div>
  );
}

export default App;
