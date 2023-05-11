import React from "react";
import { bigheader } from "../../assets";
import styles, { layout } from "../../style";
const Banner = () => {
  return (
    <section id="features" className="flex flex-1">
      <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
        <h2 className={styles.heading2}>
          Jadi expert bersama, <br className="sm:block hidden" /> edspert.id
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
          bidangnya, untuk siapkan karir impian anda.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={bigheader} alt="star" className="z-[5] relative " />
        <div className="arrow-yellow absolute right-40 bottom-40 w-[60%] h-[40%] z-[1]  items-center justify-center "></div>
        <div className="arrow-blue absolute right-50 bottom-0 z-[2] w-[60%] h-[60%] items-center justify-center "></div>
      </div>
    </section>
  );
};

export default Banner;
