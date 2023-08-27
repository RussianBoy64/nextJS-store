import Image, { StaticImageData } from "next/image";
import quotesSVG from "@/public/quotes.svg";

import styles from "./inspiration.module.scss";

interface inspirationProps {
  backImage: StaticImageData;
  primaryImage: StaticImageData;
}

const Inspiration = ({ backImage, primaryImage }: inspirationProps) => {
  return (
    <section className={styles.inspiration}>
      <div className={styles.inspiration__imageWrapper}>
        <Image
          className={styles.inspiration__image}
          src={backImage}
          alt="inspiration photo"
        />
        <Image
          className={styles.inspiration__image}
          src={primaryImage}
          alt="inspiration photo"
        />
      </div>
      <Image className={styles.quote__quotes} src={quotesSVG} alt="quotes" />
      <p className={styles.quote__text}>
        I place the notion of creativity at the same level as that of craftmanship, but
        both give the way to the humandimension that is at the heart of my Work.
      </p>
      <span className={styles.author}>
        <span className={styles.author__name}>Scotty Lauren</span>
        <span className={styles.author__position}>Product designer</span>
      </span>
    </section>
  );
};

export default Inspiration;
