import React from "react";
import styles, { layout } from "../../style";
const Join = () => {
  return (
    <section id="features" className="flex h-[386px]">
      <div
        className={`${layout.sectionInfo} text-center flex items-center flex-col justify-center gap-5`}
      >
        <h2 className={`${styles.heading2}`}>Sudah siap bergabung?</h2>
        <button className="btn rounded-[50px] item-center text-white bg-yellow  w-[262px] h-[53px] text-[16px] font-semibold">
          Daftar Kelas
        </button>
      </div>
    </section>
  );
};

export default Join;
