import React from "react";

const CoffeeCard = ({coffee}) => {
    const {name,photo,chef,price} = coffee
  return (
    <>
      <div className="flex justify-center items-center p-4 bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Price: {price}</p>
        
        </div>
          <div className="card-actions justify-end flex flex-col">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">Edit</button>
            <button  className="btn btn-primary">Delete</button>
          </div>
      </div>
    </>
  );
};

export default CoffeeCard;
