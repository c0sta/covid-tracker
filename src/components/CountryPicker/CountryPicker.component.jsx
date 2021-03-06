import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../services/api";
import styles from "./CountryPicker.module.css";
import cx from "classnames";

export function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  // console.log(fetchedCountries);

  return (
    <FormControl className={cx(styles.formControl)}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global"> Global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
