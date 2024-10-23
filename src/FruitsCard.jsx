import React from "react";

const FruitsCard = ({ fruits }) => {
  console.log("fruits", fruits);
  return (
    //className='
    <div className="w-[100%] flex justify-center items-center   ">
      <div className="w-[80%] bg-white flex justify-center text-center flex-wrap gap-10  ">
        {fruits.map((fruit, index) => (
          <div className="w-[300px] p-10 bg-slate-200 hover:scale-110 rounded-2xl group overflow-hidden shadow-xl transform duration-1000">
            <img src={fruit.image} alt={fruit.name} className="object-cover" />
            <div className="flex flex-col">
              <span className="font-display text-slate-500">{fruit.name}</span>
              <span className="font-display text-slate-500">
                ₹{fruit.price}
              </span>
              <span className="font-display text-teal-700 group-hover:visible invisible">Add to cart
              </span>
            </div>

            <span className="absolute top-3 right-3">1% off</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitsCard;
