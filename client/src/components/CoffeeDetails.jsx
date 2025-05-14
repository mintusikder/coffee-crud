import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="p-4 text-left">
        <h2 className="card-title">Name: {coffee.name}</h2>
        <p>Price: {coffee.price}</p>
        <p>Chef: {coffee.chef}</p>
  
      </div>
    </div>
  );
};

export default CoffeeDetails;
