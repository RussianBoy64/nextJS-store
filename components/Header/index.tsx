import Logo from "@/components/Logo";
import styles from "./header.module.scss";
import ProfilePanel from "@/components/UI/ProfilePanel";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ProfilePanel />
    </header>
  );
};

export default Header;
