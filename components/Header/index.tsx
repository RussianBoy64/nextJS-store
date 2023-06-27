import Logo from "@/components/Logo";
import ProfilePanel from "@/components/UI/ProfilePanel";
import SettingsPanel from "@/components/UI/SettingsPanel";
import SearchPanel from "@/components/UI/SearchPanel";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchPanel />
      <Logo />
      <ProfilePanel />
      <SettingsPanel />
    </header>
  );
};

export default Header;
