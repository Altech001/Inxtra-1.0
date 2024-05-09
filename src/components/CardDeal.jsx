import { card, img1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get the Uptodate <br className="sm:block hidden" /> And Upgraded
        Stoftware.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      From a Simple Click to a Seamless Kickstart:
     Embrace the Ultimate Online Package Installation Experience Today!
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={img1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
