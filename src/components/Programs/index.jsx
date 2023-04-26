import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../store/product/actions";
import styles from "../../style";
import Cards from "../Cards";

const Program = () => {
  const { entities } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProducts());
    };

    fetchProduct();
  }, [dispatch]);

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section id="programs" className={`${styles.paddingY}  flex-col relative `}>
      <div className="cursor-pointer flex flex-wrap gap-10 sm:justify-start w-full feedback-container relative z-[1]">
        {entities.map((card, index) => (
          <div key={index} onClick={() => goToDetail(card.id)} className="">
            <Cards {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
