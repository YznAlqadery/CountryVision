import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleDarkMode = () => {
    const nav = document.querySelector(".navbar");

    const borderlink = document.querySelectorAll(".border__link");
    borderlink.forEach((link) => {
      link.querySelector(".border__item").classList.toggle("dark-mode");
    });
    const button = document.querySelector(".btn");
    const country = document.querySelectorAll(".country");

    country.forEach((country) => {
      country.classList.toggle("dark-mode");
    });
    button.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav__wrapper">
          <Link to="/" className="app__name">
            <h1 className="nav__header">Where in the world?</h1>
          </Link>
          <button className="btn" onClick={toggleDarkMode}>
            <i className="fa-regular fa-moon"></i>
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
