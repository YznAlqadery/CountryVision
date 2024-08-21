import { Link } from "react-router-dom";

export default function BorderCountries({ borders }) {
  return (
    <>
      <h3>Border Countries:</h3>
      <ul className="border__items">
        {borders.map((border) => (
          <Link to={`/country/${border}`} className="border__link" key={border}>
            <li className="border__item">{border}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
