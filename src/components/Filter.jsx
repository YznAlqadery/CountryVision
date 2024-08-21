import { useCountryContext } from "../context/CountryProvider";

export default function Filter() {
  const { region, handleRegion } = useCountryContext();
  return (
    <div>
      <select
        name="region"
        id="region"
        className="search__select"
        onChange={handleRegion}
        value={region}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
