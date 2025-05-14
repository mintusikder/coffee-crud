import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault(); // Fixed typo in preventDefault
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added success",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          console.log(data);
        }
      });
  };

  return (
    <div className="p-4 md:px-8 lg:px-24">
      <div className="p-4 md:px-8 lg:px-12 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Add New Coffee</h1>
        <p className="text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleAddCoffee} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Coffee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="chef" className="block text-sm font-medium">
              Chef
            </label>
            <input
              type="text"
              id="chef"
              name="chef"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee chef"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="supplier" className="block text-sm font-medium">
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="taste" className="block text-sm font-medium">
              Taste
            </label>
            <input
              type="text"
              id="taste"
              name="taste"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee taste"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee category"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee price"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="photo" className="block text-sm font-medium">
            Photo Url
          </label>
          <input
            type="url" // Changed to url type for better validation
            id="photo"
            name="photo"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
            placeholder="Enter coffee photo URL"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
