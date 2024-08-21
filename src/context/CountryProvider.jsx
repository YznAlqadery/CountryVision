import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext();

export default function CountryProvider({ children }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const handleSetCountries = (data) => {
    setCountries(data);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <CountryContext.Provider
      value={{
        search,
        handleSearch,
        region,
        handleRegion,
        countries,
        handleSetCountries,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountryContext() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
}

export { CountryProvider, useCountryContext };
