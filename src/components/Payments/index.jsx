import { bca, mandiri } from "../../assets";

const Payment = () => (
  <div className="flex flex-[1]  flex-col  w-[308px] mr-10 card-box h-[847px]">
    <div className={`rounded-[20px] px-8 py-4`}>
      <div className={`font-vietnam font-normal text-[18px] my-5 `}>
        <h3 className="font-semibold text-[20px]">Pilih Metode Pembayaran</h3>
      </div>
      <div className="font-vietnam">
        <h4 className="font-semibold text-[14px]">
          Bank Transfer (verifikasi manual)
        </h4>
        <p className="font-normal text-grey text-[14px] my-1">
          Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini
          memerlukan verifikasi pembayaran manual melalui Whatsapp
        </p>
      </div>
      <hr className="my-3" />
      <div className="flex flex-row mt-3 px-3 justify-between border-[1px] h-[56px] py-2 px-4">
        <div className="flex flex-row gap-3 font-vietnam items-center ">
          <img src={mandiri} alt="Bank Mandiri" className="w-[72px] h-[28px]" />
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
          Pembayaran melalui virtual account berbagai bank. Metode bayar ini
          akan diverifikasi secara otomatis.
        </p>
      </div>
      <hr className="my-3" />
      <div className="flex flex-row mt-3 px-3 justify-between border-[1px] h-[56px] py-2 px-4">
        <div className="flex flex-row gap-3 font-vietnam items-center ">
          <img src={mandiri} alt="Bank Mandiri" className="w-[72px] h-[28px]" />
          <p className="text-[14px] items-center">Virtual Account Mandiri</p>
        </div>
        <div className="flex">
          <input type="radio" name="Bank" className="items-center" />
        </div>
      </div>
      <div className="flex flex-row mt-3 px-3 py-1 justify-between border-[1px] h-[56px] py-2 px-4">
        <div className="flex flex-row gap-3 font-vietnam items-center">
          <img src={bca} alt="Bank BCA" className="w-[72px] h-[28px]" />
          <p className="text-[14px] items-center">Virtual Account BCA</p>
        </div>
        <div className="flex">
          <input type="radio" name="Bank" className="items-center" />
        </div>
      </div>
    </div>
  </div>
);

export default Payment;
