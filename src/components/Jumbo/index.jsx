import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bigheader } from "../../assets";
import { getProduct } from "../../store/product/actions";
import styles, { layout } from "../../style";
const Jumbo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  return (
    <section id="features" className="flex flex-1">
      <div
        className={`${layout.sectionInfo} flex justify-center items-start flex-col sm:px-12 px-8 sm:py-12 py-6`}
      >
        <h2 className={styles.heading2}>{entity.title}</h2>
        <h3 className={`text-white text-[32px] font-vietnam`}>
          {entity.description}
        </h3>

        <h5 className={`mt-5 text-white font-vietnam text-[18px]`}>Mentor</h5>
        <div className="flex flex-row gap-5">
          <div className=" text-white font-vietnam ">
            <p className="font-semibold text-[20px]">William Hartono</p>
            <p className="font-normal text-[18px]">
              Frontend Developer at Widya Edu
            </p>
          </div>
          <div className="font-normal  text-white font-vietnam">
            <p className="font-semibold text-[20px]">Farel Prayoga</p>
            <p className="font-normal text-[18px]"> Developer at Widya Edu</p>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={bigheader} alt="star" className="z-[5] relative " />
        <div className="arrow-yellow absolute right-40 bottom-40 w-[60%] h-[40%] z-[1]  items-center justify-center "></div>
      </div>
    </section>
  );
};

export default Jumbo;
