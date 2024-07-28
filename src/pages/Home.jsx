import React, { useContext, useState } from "react";
import { FoodContext } from "../context/context";
import PacmanLoader from "react-spinners/PacmanLoader";
import Error from "../assets/error.jpg";
import Food from "../assets/food.png";
import Paela from "../assets/Paela.png";
import Food1 from "../assets/food1.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/food3.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Recipes from "./recipes";
import "./Home.css";

function Home() {

  const {  recipes, loading, error ,} = useContext(FoodContext);
 

  if (loading) {
    return (
      <div className="w-full grid grid-cols-4 gap-5 p-3 my-4 scrolled overflow-x-hidden overflow-y-scroll scrollbar-custom">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-fit flex justify-center items-center">
        <PacmanLoader
          color="#72d648"
          margin={8}
          size={60}
          speedMultiplier={1.3}
        />
      </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed top-0 left-0 h-screen w-full bg-green-500/35 flex justify-center items-center">
        <div className="flex justify-center items-center bg-white p-4">
          <img src={Error} alt="Error" className="w-full h-fit" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-4 gap-5 p-3 my-4 scrolled overflow-x-hidden overflow-y-scroll scrollbar-custom">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipes key={index} recipe={recipe}/>
        ))
      ) : (
        <div className="col-span-4">
          <div className="flex gap-10 justify-center mt-10">
            <div>
              <div className="croissant w-fit pr-10 relative prox flex justify-center items-center gap-1 text-xl font-black text-white">
                Checking For Proxy
                <img
                  src={Paela}
                  alt="Paela"
                  className="w-10 h-10 absolute top-1/2 -translate-y-1/2 right-0"
                />
              </div>
              <div>
                <h1 className="my-3 text-5xl w-11/12 flex-wrap font-black leading-[60px] text-white">
                  Best Recipe For You And For Free!
                </h1>
                <p className="capitalize text-white text-xl font-bold w-10/12 flex-wrap">
                  This website provides multiple food recipes. You just need to
                  search and it will give you all the details.
                </p>
                <Link to="/About">
                  <button className="croissant text-center w-fit px-6 py-2 rounded-xl text-white text-xl font-black mt-4">
                    Bon Appétit
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3">
              <img src={Food} alt="Food" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-16">
            <div className="col-span-1 card relative p-4">
              <div className="w-44 h-44 rounded-full absolute -top-8 right-0">
                <img src={Food1} className="w-full" alt="Food1" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Pasta Caprese</h1>
                <h1 className="text-lg text-green-800 capitalize my-3">
                  pasta/tomato/cheese
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-xl">
                  <h1>2.5K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    4.5 <FaStar className="text-yellow-300" />
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-span-1 card relative p-4">
              <div className="w-48 h-48 rounded-full absolute -top-10 -right-8">
                <img src={Food2} className="w-full" alt="Food2" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Green Salad</h1>
                <h1 className="text-lg text-green-800 capitalize my-3">
                  leafy greens/tomato/onions
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-xl">
                  <h1>5.4K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    5 <FaStar className="text-yellow-300" />
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-span-1 card relative p-4">
              <div className="w-44 h-44 rounded-full absolute -top-12 -right-4">
                <img src={Food3} className="w-full" alt="Food3" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Pizza</h1>
                <h1 className="text-lg text-green-800 capitalize my-3">
                  cheese/tomato/pepperoni
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-xl">
                  <h1>1.5K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    4.2 <FaStar className="text-yellow-300" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
