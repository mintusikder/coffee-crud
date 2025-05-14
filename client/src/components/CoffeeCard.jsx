import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, _id } = coffee;

  const handelDelete = (_id) => {
    console.log("user delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
          <button onClick={() => handelDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
