import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { prices } from "../../prices";

const Price = ({ price }) => {
  const { forService, singlePrice } = price;
  return (
    <div className="price">
      <span className="pCenter">
        <AiOutlineArrowRight /> <span>{forService}</span>
      </span>
      <span>${singlePrice}</span>
    </div>
  );
};

export default Price;
