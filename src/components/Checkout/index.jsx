import { arrowleft, right } from "../../assets";
import styles from "../../style";
import Order from "../Order";
import Payment from "../Payments";

const Checkout = () => {
  return (
    <>
      <section className={` ${styles.paddingY} flex-col`}>
        <div className="flex flex-[1] flex-col justify-center items-start font-vietnam font-semibold">
          <div className="flex gap-3 px-5 py-5">
            <img src={arrowleft} alt="arrow left" />
            <p className="text-underline items-center">Checkout</p>
            <img src={right} alt="arrow rigth" />
            <p>Instruksi Bayar</p>
          </div>
          <h2
            className={`font-vietnam font-bold text-[30px]  text-navy px-5 py-5`}
          >
            Checkout
          </h2>
        </div>
        <div
          className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-5 py-5 `}
        >
          <Payment />

          <div className="flex flex-[1.1]  flex-col  w-[308px] mr-10 card-box h-[847px]">
            <Order />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
