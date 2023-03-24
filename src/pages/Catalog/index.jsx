import { Navbar } from "../../components";
import styles from "../../style";

const Catalog = () => (
  <div className="bg-blue w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
);

export default Catalog;
