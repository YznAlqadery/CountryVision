import { useEffect } from "react";
import Countries from "./Countries";

export default function FilteredResults({
  region,
  countries,
  handleSetCountries,
  setIsLoading,
}) {
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const data = await response.json();
        handleSetCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
    setIsLoading(false);
  }, [region, handleSetCountries]);

  return (
    <>
      <Countries countries={countries} />
    </>
  );
}
