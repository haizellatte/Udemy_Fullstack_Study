import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Salady</a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/menu-1">Menu 1</a>
          </li>
          <li>
            <a href="/menu-2">Menu 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
