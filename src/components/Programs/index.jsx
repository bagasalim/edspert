import { programs } from "../../constants";
import styles from "../../style";
import Cards from "../Cards";

const Program = () => (
  <section id="programs" className={`${styles.paddingY}  flex-col relative `}>
    <div className="flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]">
      {programs.map((card) => (
        <Cards key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Program;
