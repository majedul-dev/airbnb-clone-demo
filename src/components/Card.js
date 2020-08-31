import React from "react";
import "../styles/Card.css";

const Card = ({ src, title, description, price }) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card__info'>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price && `£${price}/Night`}</h3>
      </div>
    </div>
  );
};

export default Card;
