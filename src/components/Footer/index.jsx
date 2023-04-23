import { edspert } from "../../assets";
import { footer, information } from "../../constants";

import styles from "../../style";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} bg-white flex-col relative`}
  >
    <div className={`flex flex-[1]  md:flex-row flex-col mb-8 w-full h-[100%]`}>
      {information[0] && (
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={edspert}
            alt="edspert logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p
            className={`${styles.paragraph} mt-4 max-w-[550px] text-grey mb-3  font-vietnam font-normal`}
          >
            {information[0].address}
          </p>
          <p
            className={`${styles.paragraph} mt-4 max-w-[550px] text-grey mb-3 font-vietnam font-normal`}
          >
            {information[1].phone}
          </p>
          <p
            className={`${styles.paragraph} mt-4 max-w-[550px] text-grey  font-vietnam font-normal`}
          >
            {information[2].email}
          </p>
        </div>
      )}

      <div className=" flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 z-[5] relative ">
        <div className=" bg-eclipse "></div>
        {footer.map((footerTitle) => (
          <div className="flex flex-col ss:my-0 my-4 " key={footerTitle.key}>
            <h4 className="font-vietnam font-medium text-[18px] leading-[27px] text-black mr-5">
              {footerTitle.title}
            </h4>
            <ul className="list-none mt-4">
              {footerTitle.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-vietnam font-medium text-[16px] leading-[24px] text-grey hover:text-primary cursor-pointer ${
                    index !== footerTitle.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full flex  items-center md:flex-row flex-col pt-6 mt-20">
          <p className="font-vietnam flex font-medium text-[16px] leading-[27px] text-grey">
            Copyright Ⓒ {currentYear} edpsert.id All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
