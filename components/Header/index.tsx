import Logo from "@/components/Logo";
import ProfilePanel from "@/components/UI/ProfilePanel";
import SettingsPanel from "@/components/UI/SettingsPanel";
import SearchPanel from "@/components/UI/SearchPanel";
import CategoriesPanel from "@/components/UI/CategoriesPanel";
import BurgerMenu from "@/components/UI/BurgerMenu";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <CategoriesPanel />
      <SearchPanel />
      <Logo />
      <ProfilePanel />
      <SettingsPanel />
      <BurgerMenu />
    </header>
  );
};

export default Header;
