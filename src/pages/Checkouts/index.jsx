import { Checkout, Footer, Navbar } from "../../components";
import styles from "../../style";

const Checkouts = () => (
  <div className="  overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-blue`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-second ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Checkout />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Checkouts;
