import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { arrowleft, mandiri, person, right } from "../../assets";
import { atm } from "../../constants";
import { getProduct } from "../../store/product/actions";
import styles, { layout } from "../../style";
import { rupiahLocale } from "../../utils";

const Instrucs = ({ total }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  if (showAlert)
    Swal.fire({
      title: "Pembayaran Berhasil",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      didClose: () => {
        navigate(`/`);
        setShowAlert(false);
      },
    });

  return (
    <>
      <section className={` ${styles.paddingY} flex-col`}>
        <div className="flex flex-[1] flex-col justify-center items-start font-vietnam font-semibold">
          <div className="flex gap-3 px-5 py-5">
            <img src={arrowleft} alt="arrow left" />
            <p>Checkout</p>
            <img src={right} alt="arrow rigth" />
            <p className="text-underline items-center">Instruksi Bayar</p>
          </div>
          <h2
            className={`font-vietnam font-bold text-[30px]  text-navy px-5 py-5`}
          >
            Instruksi Bayar
          </h2>
        </div>
        <div
          className={`${styles.paddingY}  md:flex-row flex-col mb-8 w-full `}
        >
          <div className=" card-box">
            <div
              className={`rounded-[20px] px-10 py-4 flex md:flex-row flex-col justify-between`}
            >
              <div className="flex flex-[1] flex-col py-3 px-3">
                <div className="flex flex-row gap-3">
                  <div className="bg-navy w-[120px] rounded-[5px] flex justify-center">
                    <img src={person} alt="Person" />
                  </div>
                  <div className="font-vietnam">
                    <h3 className="font-semibold text-[20px]">
                      {entity.title}
                    </h3>
                    <h4 className="font-semibold text-[18px]">
                      {entity.description}
                    </h4>
                    <div className="flex flex-row">
                      <div className="text-grey font-normal text-[14px] justify-center mt-3 ">
                        <p>Batch</p>
                        <p>Mentor</p>
                      </div>

                      <div className="ml-3 text-black font-semibold text-[14px] justify-center mt-3">
                        <p>{entity.batch}</p>
                        <div className="mentor-names">
                          {entity.mentors.map((mentor) => (
                            <p key={mentor.name}>{mentor.name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`font-vietnam font-normal my-3`}>
                  <h4 className="font-semibold text-[14px] my-3">
                    Metode Pembayaran
                  </h4>
                  <p className="font-normal text-[14px] ">
                    Bank Transfer (verifikasi manual)-Mandiri
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="">
                    <img src={mandiri} alt="Bank Mandiri" />
                  </div>
                  <div className="font-vietnam">
                    <p className="text-[16px]">No Rek. 137000299089</p>
                    <p className="text-[16px] text-grey">
                      a.n. PT Widya Kreasi Bangsa
                    </p>
                  </div>
                </div>
                <div className="font-vietnam my-5">
                  <p className="text-[16px]">
                    Nominal yang harus dibayar senilai:
                  </p>
                  <p className="text-[24px]">{rupiahLocale(total)}</p>
                </div>
              </div>
              <div className="flex flex-[1] flex-col py-3 px-3">
                <div className={`font-vietnam font-normal my-3`}>
                  <h4 className="font-semibold text-[20px] my-3">
                    Instruksi Pembayaran
                  </h4>
                </div>
                <div className="flex flex-row gap-5 font-vietnam text-[18px]">
                  <p>ATM</p>
                  <p>Internet Banking</p>
                  <p>M-Banking</p>
                </div>
                <ol className="my-3 gap-2">
                  {atm.map((instruction, index) => (
                    <li
                      key={index}
                      className="list-inside w-[100%] text-[16px] "
                    >
                      {index + 1}. {instruction}.
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div
              className={`${layout.sectionInfo} text-center flex items-center flex-col items-center justify-center gap-5 bg-navy b-rad  h-[220px] font-vietnam mt-3`}
            >
              <h2 className={`text-white font-semibold text-[16px] `}>
                Sudah Transfer? Lakukan verifikasi pembayaran segera!
              </h2>
              <button
                onClick={() => setShowAlert(true)}
                className="btn rounded-[50px] item-center text-white bg-yellow  w-[262px] h-[53px] text-[16px] font-semibold"
              >
                Verifikasi Pembayaran
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instrucs;
