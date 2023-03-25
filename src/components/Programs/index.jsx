import React from "react";
import { programs } from "../../constants";
import styles from "../../style";
import Cards from "../Cards";

const Program = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {programs.map((card) => (
        <Cards key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Program;
