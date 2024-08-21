import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BorderCountries from "./BorderCountries";

export default function CountrySelected() {
  const [country, setCountry] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, [code]);

  const formatPopulation = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Link to="/" className="back__button">
          &larr; Back
        </Link>
        {country && (
          <div className="country__selected">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="country-selected__flag"
            />
            <div className="country-selected__details">
              <h2 className="country-selected__name">{country.name.common}</h2>
              <p>
                <strong>Population:</strong>{" "}
                {formatPopulation(country.population)}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <div className="border__countries">
                {country.borders && (
                  <BorderCountries borders={country.borders} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
