import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { countries } from "../../services/api";

export function CountryPicker() {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries);
    };
    fetchCountries();
  }, []);

  return (
    <FormControl>
      <NativeSelect>
        <option value="global"> Global</option>
      </NativeSelect>
    </FormControl>
  );
}
