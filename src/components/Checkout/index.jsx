import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { arrowleft, bca, left, mandiri, person, right } from "../../assets";
import { getProduct } from "../../store/product/actions";
import styles from "../../style";
import { rupiahLocale } from "../../utils";

const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity, loading } = useSelector((state) => state.product);

  const fetchProduct = async (id) => {
    await dispatch(getProduct(id));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

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
          <div className="flex flex-[1]  flex-col  w-[308px] mr-10 card-box h-[847px]">
            <div className={`rounded-[20px] px-8 py-4`}>
              <div className={`font-vietnam font-normal text-[18px] my-5 `}>
                <h3 className="font-semibold text-[20px]">
                  Pilih Metode Pembayaran
                </h3>
              </div>
              <div className="font-vietnam">
                <h4 className="font-semibold text-[14px]">
                  Bank Transfer (verifikasi manual)
                </h4>
                <p className="font-normal text-grey text-[14px] my-1">
                  Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                  bayar ini memerlukan verifikasi pembayaran manual melalui
                  Whatsapp
                </p>
              </div>
              <hr className="my-3" />
              <div className="flex flex-row mt-3 px-3 justify-between border-[1px] h-[56px] py-2 px-4">
                <div className="flex flex-row gap-3 font-vietnam items-center ">
                  <img
                    src={mandiri}
                    alt="Bank Mandiri"
                    className="w-[72px] h-[28px]"
                  />
                  <p className="text-[14px] items-center">
                    Transfer Ke Rekening Bank Mandiri
                  </p>
                </div>
                <div className="flex">
                  <input type="radio" name="Bank" className="items-center" />
                </div>
              </div>
              <div className="flex flex-row mt-3 px-3 py-1 justify-between border-[1px] h-[56px] py-2 px-4">
                <div className="flex flex-row gap-3 font-vietnam items-center">
                  <img src={bca} alt="Bank BCA" className="w-[72px] h-[28px]" />
                  <p className="text-[14px] items-center">
                    Transfer Ke Rekening Bank BCA
                  </p>
                </div>
                <div className="flex">
                  <input type="radio" name="Bank" className="items-center" />
                </div>
              </div>
              <div className="font-vietnam mt-5">
                <h4 className="font-semibold text-[14px]">
                  Virtual Account (verifikasi otomatis)
                </h4>
                <p className="font-normal text-grey text-[14px] my-1">
                  Pembayaran melalui virtual account berbagai bank. Metode bayar
                  ini akan diverifikasi secara otomatis.
                </p>
              </div>
              <hr className="my-3" />
              <div className="flex flex-row mt-3 px-3 justify-between border-[1px] h-[56px] py-2 px-4">
                <div className="flex flex-row gap-3 font-vietnam items-center ">
                  <img
                    src={mandiri}
                    alt="Bank Mandiri"
                    className="w-[72px] h-[28px]"
                  />
                  <p className="text-[14px] items-center">
                    Virtual Account Mandiri
                  </p>
                </div>
                <div className="flex">
                  <input type="radio" name="Bank" className="items-center" />
                </div>
              </div>
              <div className="flex flex-row mt-3 px-3 py-1 justify-between border-[1px] h-[56px] py-2 px-4">
                <div className="flex flex-row gap-3 font-vietnam items-center">
                  <img src={bca} alt="Bank BCA" className="w-[72px] h-[28px]" />
                  <p className="text-[14px] items-center">
                    Virtual Account BCA
                  </p>
                </div>
                <div className="flex">
                  <input type="radio" name="Bank" className="items-center" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-[1.1]  flex-col  w-[308px] mr-10 card-box h-[847px]">
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
                  <h4 className="font-semibold text-[18px]">
                    {entity.description}
                  </h4>
                  <div className="flex flex-row">
                    <div className="text-grey font-normal text-[14px] justify-center mt-3 ">
                      <p>Batch</p>
                      <p>Mentor</p>
                    </div>

                    <div className="ml-3 text-black font-semibold text-[14px] justify-center mt-3">
                      <p>September 2023</p>
                      <p>William Hartono, Farel Prayoga</p>
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
                <h4 className="font-semibold text-[14px] my-3">
                  Ringkasan Pembayaran
                </h4>
                <div className="flex justify-between">
                  <p className="font-normal text-[14px] my-1">Harga Kelas</p>
                  <p className="font-normal text-[14px] my-1">
                    {rupiahLocale(700000)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-[14px] my-1">Potongan</p>
                  <p className="font-normal text-[14px] my-1">
                    {rupiahLocale(700000)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-[14px] my-1">Promo</p>
                  <p className="font-normal text-[14px] my-1">
                    {rupiahLocale(700000)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-[14px] my-1">Kode Unik</p>
                  <p className="font-normal text-[14px] my-1">
                    {rupiahLocale(700000)}
                  </p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <p className="font-semibold text-[14px] my-1">
                    Total Pembayaran
                  </p>
                  <p className="font-semibold text-[14px] my-1">
                    {rupiahLocale(700000)}
                  </p>
                </div>
              </div>
              <div className="mt-10 font-vietnam">
                <p className="text-[14px]">
                  Dengan menekan tombol{" "}
                  <span className="font-semibold">Bayar</span> kamu telah
                  menyetujui syarat dan ketentuan yang berlaku, silahkan baca
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
                  <button className="btn rounded-[50px]  text-white bg-blue w-[200px] h-[48px] text-[14px] font-semibold ">
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
