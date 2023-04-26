import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { check } from "../../assets";
import { facilities, subjects } from "../../constants";
import { getProduct } from "../../store/product/actions";
import styles from "../../style";
import { rupiahLocale } from "../../utils";
const Subject = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  const goToCheckout = () => {
    navigate(`/checkout`);
  };
  return (
    <>
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex flex-col  w-[308px] mr-10 card-box">
            <div className={`rounded-[20px] py-4`}>
              <div className={`font-vietnam font-normal text-[18px] mt-3 menu`}>
                <h3 className="menuItem text-white active px-3 py-2">Materi</h3>
                <h3 className="menuItem px-3">Fasilitas</h3>
              </div>

              <hr className="my-3" />
              <div className="price flex justify-between mt-3 px-3">
                <p className="line-through text-[16px] font-semibold tracking-wider flex items-center">
                  {rupiahLocale(entity.price)}
                </p>
                <p className="text-orange text-[20px] font-bold tracking-wider flex float-end">
                  {rupiahLocale(entity.actualprice)}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => goToCheckout(id)}
                  className="btn rounded-[50px] justify-center text-white bg-yellow w-[250px] h-[50px] text-[14px] font-semibold my-3"
                >
                  Daftar Kelas
                </button>
              </div>
            </div>
          </div>

          <div className="flex-[1.5] w-full flex flex-col justify-between flex-wrap md:mt-0 mt-10 px-5 ">
            <div className="card-box px-5 py-5">
              <h2
                className={`font-vietnam font-bold text-[30px] text-navy px-5 py-5`}
              >
                Materi
              </h2>

              <div>
                {subjects.map((subject, index) => (
                  <div key={index}>
                    <div className={`flex flex-row px-5 gap-3`}>
                      <img src={check} alt="checklist" />
                      <h2 className={`font-semibold text-[20px]`}>
                        {subject.title}
                      </h2>
                    </div>
                    <div className={`px-5 py-2 text-grey text-base`}>
                      <p className={`px-8`}>{subject.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-box mt-8 px-5 py-5">
              <h2
                className={`font-vietnam font-bold text-[30px] text-navy px-5 py-3`}
              >
                Fasilitas
              </h2>
              <div>
                {facilities.map((facility, index) => (
                  <div key={index}>
                    <div className={`flex flex-row px-5 gap-3 my-3`}>
                      <img src={check} alt="checklist" />
                      <h2 className={`font-semibold text-[20px]`}>
                        {facility.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subject;
