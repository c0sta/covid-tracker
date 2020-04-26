import React from "react";
import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./services/api";
import styles from "./App.module.css";
import logo from "./assets/image.png";
import cx from "classnames";

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
    if (country === "Global")
      fetchData().then((data) => console.log("AQUI", data));
    const fetchedData = await fetchData(country);
    setCountry(country);
    setData(fetchedData);
    console.log(fetchedData);
  };

  return (
    <div className={cx(styles.main_container)}>
      <img src={logo} alt="Covid app logo" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} />
    </div>
  );
}

export default App;
