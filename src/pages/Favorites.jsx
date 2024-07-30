import React, { useContext, useState } from "react";
import { FoodContext } from "../context/context";
import "./favorites.css";
import Trash from "../assets/trash-bin-unscreen.gif";
import Truck from '../assets/wired-lineal-1927-food-truck.gif'
import BookFood from '../assets/cookbook-unscreen.gif'
import { Link } from "react-router-dom";
function Favorites() {
  const [heart, setHeart] = useState(false);
  const { Favorites,handleDeleteFavorites } = useContext(FoodContext);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 my-4 scrolled overflow-x-hidden overflow-y-scroll scrollbar-custom">
      {Favorites && Favorites.length > 0 ? (
        Favorites.map((favorite, index) => (
          <div key={index} className="col-span-1">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-2xl border-2 border-cyan-800">
              <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-cyan-800 mb-4">
                <img
                  src={favorite.image}
                  alt={favorite.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="truncate font-black text-center ">{favorite.label}</h1>
              </div>
              <div className="flex justify-between mt-4">
                <div className="p-2 rounded-full float-start bg-white shadow-lg shadow-cyan-800">
                  <div className="heart-container" title="Like">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="Give-It-An-Id"
                    />
                    <div className="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        className="svg-celebrate"
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                
                  <button
                  onClick={()=>handleDeleteFavorites(favorite)}
                  >
                    <img src={Trash} className="w-10 h-10" />
                  </button>
              
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-4 mx-auto">
         <div className="">
       
      <div className="flex justify-center items-center md:flex-row flex-col">
      
       <h1 className="text-base md:text-2xl lg:text-4xl font-black text-white ">Go And Get Some Recipe For Your Collection </h1>
<img src={BookFood} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  float-right" />

      </div>

         </div>
         <Link to="/">
                    <div className="flex justify-center items-center mt-4 lg:mt-0 ">
                      <img src={Truck} className="" />
                    </div>
                </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
