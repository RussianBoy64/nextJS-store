import Logo from "@/components/Logo";
import ProfilePanel from "@/components/UI/ProfilePanel";
import SettingsPanel from "@/components/UI/SettingsPanel";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ProfilePanel />
      <SettingsPanel />
    </header>
  );
};

export default Header;
