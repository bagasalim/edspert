import React from "react";
import { person } from "../../assets";
import { rupiahLocale } from "./../../utils";
const Cards = ({
  program,
  title,
  description,
  batch,
  price,
  mentors,
  actualprice,
}) => {
  return (
    <div
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
            {program}
          </h4>
          <p className="font-vietnam font-bold text-[20px] leading-[24px] text-white tracking-wider">
            {title}
          </p>
          <p className="font-vietnam font-light text-[14px] leading-loose text-white tracking-wide">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-white white-card ">
        <div className="flex flex-col p-3 ml-5">
          <h4 className="font-vietnam font-bold text-[24px] leading-[32px] ">
            {title}
          </h4>

          <h4 className="font-vietnam font-bold text-[16px] leading-[21px] ">
            {description}
          </h4>

          <div className="flex flex-row">
            <div className="text-grey font-normal text-[14px] justify-center mt-3 ">
              <p>Batch</p>
              <p>Mentor</p>
            </div>

            <div className="ml-3 text-black font-semibold text-[14px] justify-center mt-3">
              <p>{batch}</p>
              <div className="mentor-names">
                {mentors.map((mentor) => (
                  <p key={mentor.name}>{mentor.name}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="price flex-col mt-3">
            <p
              className={`line-through text-[16px] font-semibold tracking-wider`}
            >
              {rupiahLocale(price)}
            </p>
            <p className={`text-orange text-[24px] font-bold tracking-wider`}>
              {rupiahLocale(actualprice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
