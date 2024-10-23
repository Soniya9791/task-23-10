import React, { useState } from "react";
import FruitsCard from "./FruitsCard";

const Item = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/TamilCodingWizard/tailwindcsstutorial/9a9b5fd56d06cd7e97d7e530548cede2c0eeb3b5/src/assests/1.jpeg",
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 2,
      image:
        "https://github.com/TamilCodingWizard/tailwindcsstutorial/blob/video-09/src/assests/2.jpeg?raw=true",
      name: "Pomegranate",
      price: 200,
    },
    {
      id: 3,
      image:
        "https://github.com/TamilCodingWizard/tailwindcsstutorial/blob/video-09/src/assests/3.jpeg?raw=true",
      name: "Black Grapes",
      price: 250,
    },
    {
      id: 4,
      image:
        "https://github.com/TamilCodingWizard/tailwindcsstutorial/blob/video-09/src/assests/4.jpeg?raw=true",
      name: "Grape Fruit",
      price: 300,
    },
    {
      id: 5,
      image:
        "https://github.com/TamilCodingWizard/tailwindcsstutorial/blob/video-09/src/assests/5.jpeg?raw=true",
      name: "Berry",
      price: 250,
    },
    {
      id: 6,
      image:
        "https://github.com/TamilCodingWizard/tailwindcsstutorial/blob/video-09/src/assests/6.jpeg?raw=true",
      name: "lemon",
      price: 150,
    },
  ]);
  return (
    //className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'
    <>
      <FruitsCard fruits={fruits} />
    </>
  );
};

export default Item;
