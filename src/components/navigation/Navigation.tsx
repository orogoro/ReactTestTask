// import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Users
          </NavLink>
        </div>

        {/* <div className={styles.container}>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              [styles.link, styles.singIn, isActive ? styles.activeLink : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Login
          </NavLink>
        </div> */}

        {/* <div className={styles.burger}>
          <button
            className={styles.button}
            onClick={() => setModalActive(true)}
          >
            <img
              className={styles.imgB}
              src={mobileBurger}
              alt="mobileBurger"
            />
          </button>
        </div> */}
      </nav>
      {/* <MobileModal active={modalActive} setActive={setModalActive} /> */}
    </header>
  );
};

export default Navigation;
