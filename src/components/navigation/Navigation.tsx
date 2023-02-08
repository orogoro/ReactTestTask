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
      </nav>
    </header>
  );
};

export default Navigation;
