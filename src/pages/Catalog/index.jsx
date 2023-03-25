import { Footer, Hero, Navbar } from "../../components";
import Program from "../../components/Programs";
import styles from "../../style";

const Catalog = () => (
  <div className="  overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-blue`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-blue ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-second ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Program />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Catalog;
