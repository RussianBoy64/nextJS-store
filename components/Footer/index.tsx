import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import Socials from "./Socials";
import Additional from "./Additional";

import footerImg from "public/images/footer_img.jpg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__layout}>
        <Image
          src={footerImg}
          alt="footer image"
          placeholder="blur"
          className={styles.footer__image}
        />

        <SubscribeForm />

        <div className={styles.footer__divider} />

        <Socials />

        <Additional />
      </div>
    </footer>
  );
};

export default Footer;
