import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { person } from "../assets";
import { fetchProducts } from "../store/product/actions";
import { rupiahLocale } from "../utils";

const Cards = () => {
  const { entities } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(fetchProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const goToDetail = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div
      onClick={() => goToDetail(item.id)}
      className={`flex flex-col min-w-[360px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card h-full justify-center`}
    >
      <div className="flex flex-row bg-blue py-2 px-3 blue-card">
        <img
          src={person}
          alt="person"
          className="w-[80px] h-[150px] items-center object-contain "
        />
        <div className="flex flex-col ml-2 p-4 justify-center">
          <h4 className="font-vietnam font-semibold text-[16px] leading-[32px] text-yellow tracking-wide ">
            {item.program}
          </h4>
          <p className="font-vietnam font-bold text-[20px] leading-[24px] text-white tracking-wider">
            {item.title}
          </p>
          <p className="font-vietnam font-light text-[14px] leading-loose text-white tracking-wide">
            {item.description}
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-white white-card ">
        <div className="flex flex-col p-3 ml-5">
          <h4 className="font-vietnam font-bold text-[24px] leading-[32px] ">
            {item.title}
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
              <p>{item.batch}</p>
              <div className="mentor-names">
                {item.mentors.map((mentor) => (
                  <p key={mentor.name}>{mentor.name}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="price flex-col mt-3">
            <p
              className={`line-through text-[16px] font-semibold tracking-wider`}
            >
              {rupiahLocale(item.price)}
            </p>
            <p className={`text-orange text-[24px] font-bold tracking-wider`}>
              {rupiahLocale(item.actualprice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
