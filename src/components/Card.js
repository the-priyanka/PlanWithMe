import React, { useState } from "react";

const Card = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} alt="" className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {!readMore ? description : info}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
