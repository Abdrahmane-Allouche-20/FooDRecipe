import React, { useState } from "react";
import "animate.css";
import "./About.css";
import Magic from "../assets/magic.png";
import Recipe from "../assets/recipe.png";
import inspiration from "../assets/creativity.png";
import pear from "../assets/pear-unscreen.gif";
import pineapple from "../assets/pineapple-unscreen.gif";
import kiwi from "../assets/kiwi-unscreen.gif";
import smoothie from "../assets/smoothie-unscreen.gif";
import SignIn from '../assets/icons8-sign-in-48.png'

function About() {
  const [showContact, setShowContact] = useState(false); // Initialize with false

  function handleShowContact() {
    setShowContact(true);
  }

  return (
    <div>
      <div className="w-full p-3 my-4 scrolled overflow-x-hidden overflow-y-scroll scrollbar-custom">
        <img
          src={smoothie}
          alt="smoothie"
          className="fixed top-1/3 -left-2 md:left-2 w-12 md:w-20 lg:w-28 slide-top z-0"
        />
        <img
          src={kiwi}
          alt="kiwi"
          className="fixed bottom-2 right-2 md:right-8 w-12 md:w-20 lg:w-28 slide-top z-0"
        />
        <img
          src={pineapple}
          alt="pineapple"
          className="fixed top-3/4 -left-2 md:left-2 w-12 md:w-20 lg:w-28 slide-top z-0"
        />
        <img
          src={pear}
          alt="pear"
          className="fixed top-24 md:top-1/3 right-2 md:right-8 w-12 md:w-20 lg:w-28 slide-top z-0"
        />

        <div className="">
          <h1 className="text-green-900 font-black text-center text-2xl md:text-3xl lg:text-5xl mt-3 hover:scale-125 duration-300 my-element">
            About Us
          </h1>
          <p className="lg:max-w-4xl mx-auto mt-3 text-xs md:text-lg lg:text-xl font-bold leading-5 md:leading-8 text-white">
            We’re thrilled to have you here and excited to share our love for
            food with you. Our journey started with a simple passion for cooking
            and a desire to make delicious recipes accessible to everyone.
            Whether you’re a seasoned chef or just starting your culinary
            adventure, we’re here to inspire and guide you with a variety of
            mouthwatering recipes and helpful cooking tips.
          </p>
        </div>

        <div className="mt-10 relative z-10">
          <h1 className="my-element text-green-900 font-black text-center text-2xl md:text-3xl lg:text-5xl mt-3 hover:scale-125 duration-300">
            What We Offer
          </h1>
          <p className="max-w-4xl mx-auto mt-3  text-xs md:text-lg lg:text-xl font-bold text-center text-yellow-200">
            We believe that cooking should be fun and enjoyable. That’s why we
            offer:
          </p>
          <ul className="flex flex-col gap-4 mt-5 max-w-4xl mx-auto">
            <li>
              <img
                src={Recipe}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="recipe"
              />
              <span className="font-black text-green-800  text-sm md:text-lg lg:text-xl">
                Delicious Recipes:
              </span>
              <span className="text-white text-xs md:text-base lg:text-lg font-semibold">
                From quick weeknight dinners to impressive holiday feasts, we’ve
                got you covered with recipes that are both easy to follow and
                packed with flavor.
              </span>
            </li>
            <li>
              <img
                src={Magic}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="magic"
              />
              <span className="font-black text-green-800  text-sm md:text-lg lg:text-xl">
                Cooking Tips and :
              </span>

              <span className="text-white text-xs md:text-base lg:text-lg font-semibold">
                Learn new skills and tricks to elevate your cooking game and
                make meal prep a breeze.
              </span>
            </li>
            <li>
              <img
                src={inspiration}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="inspiration"
              />
              <span className="font-black text-green-800  text-sm md:text-lg lg:text-xl">
                Foodie Inspiration:
              </span>
              <span className="text-white text-xs md:text-base lg:text-lg font-semibold">
                Discover new ingredients, flavors, and culinary trends that will
                ignite your creativity in the kitchen.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <h1 className="my-element text-green-900 font-black text-center text-2xl md:text-3xl lg:text-5xl mt-3 hover:scale-125 duration-300">
            Our Mission
          </h1>
          <p className="max-w-4xl mx-auto mt-3  text-xs md:text-lg lg:text-xl font-bold leading-6 lg:leading-8 text-white">
            Our mission is to make cooking an enjoyable experience for everyone.
            We aim to provide you with high-quality recipes and valuable
            resources that make meal planning and preparation a joy, not a
            chore. We’re passionate about bringing people together through the
            love of food and helping you create memorable meals for you and your
            loved ones.
          </p>
        </div>

        <div className="mt-10 relative z-10">
          <h1 className="my-element text-green-900 font-black text-nowrap text-center text-2xl md:text-3xl lg:text-5xl mt-3 hover:scale-125 duration-300">
            Join Our Community
          </h1>
          <p className="max-w-4xl text-center mx-auto mt-3  text-xs md:text-lg lg:text-xl font-bold leading-6 lg:leading-8 text-white my-5">
            Click the button to Sign Up:
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={handleShowContact}
              className="group text-lg md:text-xl group-hover:before:duration-500 group-hover:after:duration-500 
              after:duration-500 hover:border-green-700 hover:before:[box-shadow:_15px_15px_15px_20px_#BBE9FF] 
              duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 
              hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4
              origin-left hover:decoration-2 hover:text-white relative bg-neutral-800 h-14 w-48  md:h-16 md:w-64 text-left p-3
              text-gray-50 border-2 font-bold rounded-lg overflow-hidden before:absolute before:w-14 before:h-14
              before:content[''] before:right-1 before:top-1 before:z-10 before:bg-green-500 before:rounded-full
              before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-yellow-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {showContact ? (
        <div className="fixed rounded-xl top-0 left-0 h-full w-full bg-black/90 flex justify-center items-center z-50">
         

          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }} // Corrected inline style format
            className="max-w-xs md:max-w-md w-full bg-gradient-to-r from-emerald-500 relative to-emerald-900 rounded-xl shadow-2xl overflow-hidden p-2 md:p-8 space-y-8"
          >
            <div
             onClick={(e) => {
              e.preventDefault(); // Prevent any default action
              setShowContact(false); // Your custom logic
            }}
            className= "absolute top-0 right-0 mb-4 mt-4 list-none space-x-1">
  <p className="inline-block text-left">
    <a
      className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap  p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-white transition duration-300 ease-linear hover:text-red-600 "
      href=""
    >
      
      <svg
        stroke="currentColor"
        fill="currentColor"
        aria-label="Twitter"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current"
      >
        <g>
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </g>
      </svg>
    </a>
  </p>
</div>
            <h2
              
              className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white"
            >
              Welcome
            </h2>
            <p
              
              className="text-center font-bold text-base md:text-lg lg:text-xl text-white"
            >
              Sign in to your account
            </p>
            <form method="POST" action="#" className="space-y-6">
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-8 md:h-10 w-full border-b-2  border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-gray-900"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className="absolute left-0 peer-focus:font-bold -top-3.5 text-white text-xs md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email address
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  className="peer h-8 md:h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-gray-900"
                  required=""
                  id="password"
                  name="password"
                  type="password"
                />
                <label
                  className="absolute peer-focus:font-bold left-0 -top-3.5 text-white  text-xs md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-xs md:text-sm text-white font-semibold">
                  <input
                    className="form-checkbox w-3 h-3 md:h-4 md:w-4 text-white bg-gray-800 border-gray-300 rounded custom-checkbox"
                    type="checkbox"
                  />
                  <span className="ml-1 md:ml-2">Remember me</span>
                </label>
                <a
                  className="text-xs md:text-sm font-bold text-white hover:text-red-500 transition-all duration-300  hover:underline"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="flex justify-center items-center">
                <button className="group flex justify-center items-center gap-2 md:gap-4 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline text-xl underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-2 md:px-10 md:py-4 border hover:border-2 text-left p-3 text-gray-50  font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                  <img className="h-6 w-6 md:w-8 md:h-8 " src={SignIn} />
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center text-sm md:text-base text-white font-bold">
              Dont have an account?
              <a className="text-gray-900 hover:underline" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default About;
