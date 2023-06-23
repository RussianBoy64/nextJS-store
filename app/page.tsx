import ThemeSwitch from "components/ThemeSwitcher";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>TITLE</h1>
      <p className={styles.accent}>THIS IS ACCENT COLOR</p>
      <ThemeSwitch />
    </main>
  );
}
