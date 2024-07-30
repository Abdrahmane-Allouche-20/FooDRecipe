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
      <div className="fixed top-1/2 left-0 translate-x-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-full h-fit flex justify-center items-center">
        <PacmanLoader 
          color="#72d648"
          margin={8}
          size={30}
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
    <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-9 md:gap-5 p-3 my-4 scrolled overflow-x-hidden overflow-y-scroll scrollbar-custom mt-2">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipes key={index} recipe={recipe}/>
        ))
      ) : (
        <div className="col-span-4">
          <div className="flex md:flex-row lg:flex-row flex-col gap-11 justify-center mt-6 lg:mt-10">
            <div>
              <div className="croissant w-fit pr-10 relative  flex justify-center items-center gap-1 text-base md:text-lg lg:text-xl font-black text-white">
                Checking For Proxy
                <img
                  src={Paela}
                  alt="Paela"
                  className="w-10 h-10 absolute top-1/2 -translate-y-1/2 right-0"
                />
              </div>
              <div>
                <h1 className="my-3 text-3xl  lg:text-5xl w-11/12 flex-wrap leading-[40px] font-black lg:leading-[60px] text-white">
                  Best Recipe For You And For Free!
                </h1>
                <p className="capitalize text-gray-100 text-base md:text-lg lg:text-xl font-bold w-full lg:w-10/12 flex-wrap">
                  This website provides multiple food recipes. You just need to
                  search and it will give you all the details.
                </p>
                <Link to="/About">
                  <button className="croissant text-center w-fit px-6 py-2 rounded-xl text-white text-base md:text-lg lg:text-xl font-black mt-4">
                    Bon Appétit
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3">
              <img src={Food} alt="Food" className=" w-4/5  lg:w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-3 mt-16">
            <div className=" col-span-1 card relative p-4">
              <div className="w-[124px] h-[124px] md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full absolute -top-8 -right-5  lg:right-0">
                <img src={Food1} className="w-full" alt="Food1" />
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">Pasta Caprese</h1>
                <h1 className="text-sm md:text-base lg:text-lg text-green-800 capitalize my-3">
                  pasta/tomato/cheese
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-base md:text-lg lg:text-xl">
                  <h1>2.5K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    4.5 <FaStar className="text-yellow-300" />
                  </h1>
                </div>
              </div>
            </div>
            <div className=" col-span-1 card relative p-4">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full absolute -top-6 lg:-top-8 -right-3  lg:right-0">
                <img src={Food2} className="w-full" alt="Food1" />
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">Mixed Saladed</h1>
                <h1 className="text-sm md:text-base lg:text-lg text-green-800 capitalize my-3">
                Carrots/onions/Cucumbers
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-base md:text-lg lg:text-xl">
                  <h1>2.5K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    4.5 <FaStar className="text-yellow-300" />
                  </h1>
                </div>
              </div>
            </div>
            <div className=" col-span-1 card relative p-4 ">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full absolute -top-6 lg:-top-8 -right-3  lg:right-0">
                <img src={Food3} className="w-full" alt="Food1" />
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">Salade Crevette</h1>
                <h1 className="text-sm md:text-base lg:text-lg text-green-800 capitalize my-3">
                  Shrimp/olive/Garlic
                </h1>
                <div className="flex justify-between items-center text-white font-bold text-base md:text-lg lg:text-xl">
                  <h1>2.5K</h1>
                  <h1>Reviews</h1>
                  <h1 className="flex items-center">
                    4.5 <FaStar className="text-yellow-300" />
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
