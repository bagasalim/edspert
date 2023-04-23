import { Footer, Instrucs, Navbar } from "../../components";
import styles from "../../style";

const Instructions = () => (
  <div className="  overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-blue`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-second ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Instrucs />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Instructions;
