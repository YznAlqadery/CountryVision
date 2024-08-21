import { useEffect } from "react";
import Countries from "./Countries";
import { useCountryContext } from "../context/CountryProvider";

export default function SearchedResults() {
  const { search, handleSetCountries, countries, setIsLoading } =
    useCountryContext();

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);

      const data = await res.json();
      if (data.status === 404) {
        handleSetCountries([]);
        return;
      }
      handleSetCountries(data);
    };

    fetchCountries();
    setIsLoading(false);
  }, [search, handleSetCountries, setIsLoading]);

  return (
    <>
      {/* Display the countries here */}

      <Countries countries={countries} />
    </>
  );
}
