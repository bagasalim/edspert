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

  const fetchProducts = async () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const goToDetail = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <section id="programs" className={`${styles.paddingY}  flex-col relative `}>
      <div
        onClick={() => goToDetail}
        className="flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]"
      >
        {entities.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Program;
