import React from "react";

const Avator = ({ full_name, img }) => {
  let first, last;
  // if (img === null && full_name !== null) {
  //   let arrayofName = full_name.split(" ");
  //   first = arrayofName[0].charAt(0);
  //   last = arrayofName[1].charAt(0);
  //   console.log(first, last);
  // }

  return (
    <>
      <div className="avator_img">
        <img src={img === null ? first + last : img} alt="image of a bloger" />
      </div>
      <div className="avator_name">
        <p>{full_name}</p>
      </div>
    </>
  );
};

export default Avator;
