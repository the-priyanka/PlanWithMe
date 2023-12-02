import React from "react";
import Card from "./Card";

const Tours = (props) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Priyanka</h2>
      </div>
      <div className="cards">
        {props.tours.map((tour) => {
          return (
            <Card
              key={tour.id}
              {...tour}
              removeTour={props.removeTour}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
