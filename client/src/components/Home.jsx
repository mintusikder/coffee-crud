import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const intialcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(intialcoffees);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees}  coffee={coffee}></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
