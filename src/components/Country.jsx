import { Link } from "react-router-dom";

export default function Country({ country }) {
  const { name, population, region, capital, flags, cca3 } = country;

  const formatPopulation = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Link to={`country/${cca3}`} className="country">
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="country__flag"
      />
      <div className="country__details">
        <h2 className="country__name">{name.common}</h2>
        <p>
          <strong>Population:</strong> {formatPopulation(population)}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
}
