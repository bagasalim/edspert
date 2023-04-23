import { Footer, Join, Jumbo, Navbar, Subject } from "../../components";
import styles from "../../style";

const Details = () => (
  <div className="  overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-blue`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-blue ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Jumbo />
      </div>
    </div>
    <div className={`bg-second ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Subject />
      </div>
    </div>
    <div className={`bg-blue ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Join />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Details;
