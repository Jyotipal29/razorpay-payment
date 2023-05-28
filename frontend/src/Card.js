import React from "react";

const Card = ({ item, checkOutHandler }) => {
  return (
    <div className="card">
      <img src={item.imgUrl} alt="" className="img" />
      <p>{item.name}</p>
      <p> {item.amount} </p>
      <button onClick={() => checkOutHandler(item.amount)}>buy me </button>
    </div>
  );
};

export default Card;
