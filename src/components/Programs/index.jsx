import { person } from "../../assets";
import { programs } from "../../constants";
import styles from "../../style";
import { rupiahLocale } from "../../utils";

const Program = () => (
  <section id="programs" className={`${styles.paddingY}  flex-col relative `}>
    <div className="flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]">
      {programs.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col min-w-[375px] max-w-[375px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card h-full justify-center`}
        >
          <div className="flex flex-row bg-blue py-2 px-3 blue-card">
            <img
              src={person}
              alt="person"
              className="w-[80px] h-[150px] items-center object-contain "
            />
            <div className="flex flex-col ml-2 p-4 justify-center">
              <h4 className="font-vietnam font-semibold text-[16px] leading-[32px] text-yellow tracking-wide ">
                {card.program}
              </h4>
              <p className="font-vietnam font-bold text-[20px] leading-[24px] text-white tracking-wider">
                {card.title}
              </p>
              <p className="font-vietnam font-light text-[14px] leading-loose text-white tracking-wide">
                {card.description}
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-white white-card ">
            <div className="flex flex-col p-3 ml-5">
              <h4 className="font-vietnam font-bold text-[24px] leading-[32px] ">
                {card.title}
              </h4>

              <h4 className="font-vietnam font-bold text-[16px] leading-[21px] ">
                {card.description}
              </h4>

              <div className="flex flex-row">
                <div className="text-grey font-normal text-[14px] justify-center mt-3 ">
                  <p>Batch</p>
                  <p>Mentor</p>
                </div>

                <div className="ml-3 text-black font-semibold text-[14px] justify-center mt-3">
                  <p>{card.batch}</p>
                  <div className="mentor-names">
                    {card.mentors &&
                      card.mentors.map((mentor) => (
                        <p key={mentor.name}>{mentor.name}</p>
                      ))}
                  </div>
                </div>
              </div>

              <div className="price flex-col mt-3">
                <p
                  className={`line-through text-[16px] font-semibold tracking-wider`}
                >
                  {rupiahLocale(card.price)}
                </p>
                <p
                  className={`text-orange text-[24px] font-bold tracking-wider`}
                >
                  {rupiahLocale(card.actualprice)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Program;
