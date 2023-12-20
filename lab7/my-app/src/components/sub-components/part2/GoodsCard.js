import React from 'react';
import "../../../components-styles/GoodsCard.css"

const GoodsCard = ({ photo, name, price }) => {
  return (
    <div className="goods-card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>Prise: {price} $</p>
    </div>
  );
};

export default GoodsCard;