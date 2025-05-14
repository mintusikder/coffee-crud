import React from "react";

const AddCoffee = () => {
    const handelAddCoffee = e =>{
        e.preventDefault()
        const form = e.target 
       const formData = new FormData(form)
       console.log(formData.entries())
        const coffeeData = Object.fromEntries(formData.entries())
        console.log(coffeeData)
    }
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

      <form onSubmit={handelAddCoffee} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Coffee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Chef
            </label>
            <input
              type="text"
              id="chef"
              name="chef"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee chef"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Taste
            </label>
            <input
              type="text"
              id="taste"
              name="taste"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee taste"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee category"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Details
            </label>
            <input
              type="text"
              id="details"
              name="details"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee details"
            />
          </div>
        </div>
            <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
             Photo Url
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter coffee photo"
            />
          </div>

        <div className="pt-2">
          <button type="submit" className="w-full btn ">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
