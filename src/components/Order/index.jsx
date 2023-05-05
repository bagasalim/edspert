import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { left, person } from "../../assets";
import { getProduct } from "../../store/product/actions";
import { rupiahLocale } from "../../utils";

const Order = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entity } = useSelector((state) => state.product);
  const { entities } = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  const countTotal = (data) => {
    const total = data.reduce((prev, current) => {
      return prev + parseInt(current.actualprice, 10);
    }, 0);
    return total;
  };

  const goToInstructions = () => {
    const total = countTotal(entities);
    localStorage.setItem("total", total);
    navigate(`/instructions`);
  };

  return (
    <div className={`rounded-[20px] px-8 py-4`}>
      <div className={`font-vietnam font-normal text-[18px] my-5`}>
        <h3 className="font-semibold text-[20px]">Ringkasan Pesanan</h3>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-navy w-[120px] rounded-[5px] flex justify-center">
          <img src={person} alt="Person" />
        </div>
        <div className="font-vietnam">
          <h3 className="font-semibold text-[20px]">{entity.title}</h3>
          <h4 className="font-semibold text-[18px]">{entity.description}</h4>
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
      <div className={`font-vietnam font-normal my-5`}>
        <h4 className="font-semibold text-[14px]">Kode Promo</h4>
        <div className="flex flex-row my-3 gap-3 items-center">
          <input
            type="text"
            className="w-[75%] h-[54px] border-[1px] p-3 "
            placeholder="Masukkan Kode Promo"
          />
          <button
            className={`btn justify-center text-white bg-blue w-[108px] h-[54px] text-[14px] font-semibold my-3`}
          >
            Terapkan
          </button>
        </div>
      </div>
      <div className={`font-vietnam font-normal`}>
        <h4 className="font-semibold text-[14px]">Metode Pembayaran</h4>
        <p className="font-normal text-[14px] my-3">
          Bank Transfer (verifikasi manual)-Mandiri
        </p>
      </div>
      <div className={`font-vietnam font-normal mt-5`}>
        <h4 className="font-semibold text-[14px] my-3">Ringkasan Pembayaran</h4>
        {entities.map((item, index) => {
          return (
            <div className="flex justify-between">
              <p className="font-normal text-[14px] my-1">{item.title}</p>
              <p className="font-normal text-[14px] my-1">
                {rupiahLocale(item.actualprice)}
              </p>
            </div>
          );
        })}

        <hr className="my-3" />
        <div className="flex justify-between">
          <p className="font-semibold text-[14px] my-1">Total Pembayaran</p>
          <p className="font-semibold text-[14px] my-1">
            {rupiahLocale(countTotal(entities))}
          </p>
        </div>
      </div>
      <div className="mt-10 font-vietnam">
        <p className="text-[14px]">
          Dengan menekan tombol <span className="font-semibold">Bayar</span>{" "}
          kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca
          kembali{" "}
          <span className="font-semibold underline underline-offset-2 text-underline">
            Syarat & ketentuan
          </span>{" "}
          yang berlaku.
        </p>
      </div>
      <div className="flex justify-between mt-8 font-vietnam">
        <div className="flex flex-row gap-2 items-center">
          <img src={left} alt="arrow left" />
          <p>Batalkan</p>
        </div>
        <div className="">
          <button
            onClick={() => goToInstructions()}
            className="btn rounded-[50px]  text-white bg-blue w-[200px] h-[48px] text-[14px] font-semibold "
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
