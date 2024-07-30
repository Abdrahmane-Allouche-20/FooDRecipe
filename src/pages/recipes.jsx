import React, { useContext, useState } from "react";
import { FoodContext } from "../context/context";
import Close from "../assets/delete-unscreen.gif";
import Save from "../assets/notebook-unscreen.gif";
import './recipe.css'
import Delete from "../assets/trash-bin-unscreen.gif";
import list from "../assets/recipe-unscreen.gif"
import vitamine from '../assets/vitamins-unscreen.gif'
function Recipes({ recipe }) {
  const { handleFav, Favorites } = useContext(FoodContext);
  const isFavorite = Favorites.some((fav) => fav.label === recipe.recipe.label);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="col-span-1">
      <div className="p-2 md:p-3 bg-gradient-to-r from-green-200 to-green-300 rounded-2xl border-2 border-white">
        <div className="w-full h-52 rounded-xl overflow-hidden border-2 border-white mb-4">
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="truncate font-black text-sm md:text-base">{recipe.recipe.label}</h1>
          <h1 className="truncate font-bold mt-2  ">
            Calories:{" "}
            <span className="font-semibold  text-sm md:text-base ">
              {Math.round(recipe.recipe.calories)}
            </span>
          </h1>
          <h1 className="truncate font-bold  mt-2  text-sm md:text-base ">
            Cuisine:{" "}
            <span className="font-semibold capitalize">
              {" "}
              {recipe.recipe.cuisineType}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => setShowDetails(true)}
            className="group/button border-green-950 relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-green-900 backdrop-blur-lg px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-900/60 border-2 "
          >
            <span className="text-lg">More Details</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full rounded-xl  bg-black/90 flex justify-center items-center z-50 ">
          <div className="bg-gradient-to-r mx-auto w-11/12 lg:w-8/12  from-blue-200 to-cyan-200 recipe overflow-y-hidden rounded-xl  p-1  md:p-2 shadow-lg border-2 border-cyan-900 shadow-white/10 relative">
            <div className="p-2 md:p-3 overflow-x-hidden  overflow-y-scroll scrollbar-custom-recipe  recipeContainer rounded-lg">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-0 right-0"
            >
              <img src={Close} alt="" className="w-8 h-8 md:w-10 md:h-10  z-50 lg:w-12 lg:h-12" />
            </button>

            <div className="flex  gap-2 md:gap-4 mt-5 md:mt-0">
              <div className="w-36 h-36  md:w-44 md:h-44 overflow-hidden float-start border-2 border-green-900 rounded-xl">
                <img
                  src={recipe.recipe.image}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="">
                <h1 className=" font-black capitalize text-sm md:text-xl lg:text-2xl">
                  Title:{" "}
                  <span className="font-bold text-xs
                   md:text-xl lg:text-lg">
                    {recipe.recipe.label}
                  </span>{" "}
                </h1>
                <h1 className=" font-black capitalize text-sm md:text-xl lg:text-2xl">
                  Calories:{" "}
                  <span className="font-bold text-xs md:text-xl lg:text-lg">
                    {recipe.recipe.calories.toFixed(2)}
                  </span>{" "}
                </h1>
                <h1 className=" font-black capitalize text-sm md:text-xl lg:text-2xl">
                  diet:{" "}
                  <span className="font-bold text-xs md:text-base lg:text-lg">
                    {recipe.recipe.dietLabels}
                  </span>{" "}
                </h1>
                <h1 className=" font-black capitalize text-sm md:text-xl lg:text-2xl">
                  Source:{" "}
                  <span className="font-bold text-xs md:text-base  lg:text-lg">
                    {recipe.recipe.source}
                  </span>{" "}
                </h1>
                <h1 className=" font-black capitalize text-sm md:text-xl lg:text-2xl">
                  Weight:{" "}
                  <span className="font-bold text-xs md:text-base  lg:text-lg">
                    {recipe.recipe.totalWeight.toFixed(2)}
                  </span>{" "}
                </h1>
              </div>
            </div>
            <div className="grid md:gap-6 gap-3 grid-cols-1 md:grid-cols-2">
              <div className="col-span-1">
                <ul className=" gap-6">
                  <h1 className=" font-black my-2">Ingredients :</h1>
                  {recipe.recipe.ingredients
                    .slice(0, 6)
                    .map((ingredient, index) => (
                      <li key={index} className="font-bold capitalize flex  items-start 
                      ">
                       <img src={list} className="w-5 h-5 mt-1" />  {ingredient.text}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-span-1">
                <div className="col-span-1">
                  <ul className=" gap-6">
                    <h1 className="text-lg font-black my-2">Digest :</h1>
                    {recipe.recipe.digest.slice(0, 8).map((digest, index) => (
                      <li
                        key={index}
                        className="font-bold capitalize flex justify-between "
                      >
                        <div className="flex items-center gap-1">
                        <img src={vitamine} className="w-5 h-5" /><span>{digest.label}</span>
                        </div>
                        <div>
                          <span>{digest.total.toFixed(2)}</span>{" "}
                          <span>{digest.unit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleFav(recipe.recipe)}
              className="flex mt-4 text-sm md:text-base justify-center items-center gap-2 p-2 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
            >
              {isFavorite ? (
                <img src={Delete} className="w-8 h-8 md:w-10 md:h-10" />
              ) : (
                <img src={Save} className="w-8 h-8 md:w-10 md:h-10" />
              )}
              {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;
