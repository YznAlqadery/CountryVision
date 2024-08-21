import { useCountryContext } from "../context/CountryProvider";
import Country from "./Country";

export default function Countries() {
  const { countries } = useCountryContext();
  return (
    <div className="container">
      <div className="countries__list">
        {countries &&
          countries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))}
      </div>
    </div>
  );
}
