import Countries from "../components/Countries";
import FilteredResults from "../components/FilteredResults";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SearchedResults from "../components/SearchedResults";
import { useCountryContext } from "../context/CountryProvider";

export default function AppLayout() {
  const {
    search,
    handleSearch,
    region,
    handleRegion,
    countries,
    handleSetCountries,
    isLoading,
    setIsLoading,
  } = useCountryContext();

  return (
    <main>
      <Header>
        <Navbar />
        <Search
          search={search}
          handleSearch={handleSearch}
          region={region}
          handleRegion={handleRegion}
        />
      </Header>
      <section className="section__hero">
        {isLoading && <p className="loader">Loading...</p>}
        {search ? (
          <SearchedResults
            search={search}
            handleSetCountries={handleSetCountries}
            countries={countries}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : region ? (
          <FilteredResults
            region={region}
            countries={countries}
            handleSetCountries={handleSetCountries}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <Countries countries={countries} />
        )}
      </section>
    </main>
  );
}
