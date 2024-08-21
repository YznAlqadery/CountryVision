import Filter from "./Filter";

export default function Search({ search, handleSearch, region, handleRegion }) {
  return (
    <div className="container">
      <div className="search__wrapper">
        <input
          type="text"
          placeholder="Search for a country..."
          className="search__input"
          value={search}
          onChange={handleSearch}
        />
        <Filter region={region} handleRegion={handleRegion} />
      </div>
    </div>
  );
}
