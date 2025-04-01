import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Navigation.module.css";

const items = [
  {
    id: "1",
    name: "Hotel",
    icon: "/img/sprite.svg#icon-home",
  },
  {
    id: "2",
    name: "Flight",
    icon: "/img/sprite.svg#icon-aircraft-take-off",
  },
  {
    id: "3",
    name: "Car Rental",
    icon: "/img/sprite.svg#icon-key",
  },
  {
    id: "4",
    name: "Tours",
    icon: "/img/sprite.svg#icon-map",
  },
  {
    id: "5",
    name: "Weather",
    icon: "/img/sprite.svg#icon-cloud",
  },
];

export default function Navigation() {
  const [activeId, setActiveId] = useState("1");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "9d85e204b1d42390b6c24d1cdb64a685";
  const city = "Barcelona"; // you can replace this with any city

  // Fetch weather data only when the activeId is "5" (Weather item is clicked)
  useEffect(() => {
    if (activeId === "5") {
      // Only fetch weather when Weather item is selected
      setLoading(true); // Start loading
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setWeather(response.data); // Store weather data
          setLoading(false); // End loading
        })
        .catch((error) => {
          console.error("Error fetching the weather data:", error);
          setLoading(false); // End loading in case of error
        });
    } else {
      setWeather(null); // Reset weather data if any other item is selected
    }
  }, [activeId]); // Fetch data when activeId changes

  return (
    <nav className={styles.sideBar}>
      <ul className={styles.sideNav}>
        {items.map((item) => (
          <li key={item.id} className={styles.sideNavItem}>
            <NavLink
              to={`/${item.name.toLowerCase()}`}
              className={({ isActive }) => {
                if (isActive) {
                  setActiveId(item.id); // Update activeId when an item is clicked
                }
                return isActive
                  ? `${styles.sideNavLink} ${styles.active}`
                  : styles.sideNavLink;
              }}
            >
              <svg className={styles.sideNavIcon}>
                <use href={item.icon} className={styles.sideNavIcon}></use>
              </svg>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* API */}
      {activeId === "5" && (
        <div className={styles.weather}>
          {loading ? (
            <p className={styles.paragraph}>Loading weather...</p>
          ) : weather ? (
            <>
              <h3 className={styles.heading}>{weather.name}</h3>
              <p className={styles.paragraph}>
                {weather.weather && weather.weather.length > 0
                  ? weather.weather[0].description
                  : "No description"}
              </p>
              <p className={styles.paragraph}>
                {weather.main ? weather.main.temp : "No temperature data"}
              </p>
            </>
          ) : (
            <p lassName={styles.paragraph}>Error loading weather</p>
          )}
        </div>
      )}

      <div className={styles.legal}>
        &copy; 2025 by Trillo. All rights reserved.
      </div>
    </nav>
  );
}
