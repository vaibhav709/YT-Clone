import React from "react";

function Listitems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex overflow-x-scroll scrollbar-hide px-4">
     <div className="flex space-x-4 flex-nowrap ">
     {categories.map((category) => {
        return (
          <div
            key={category}
            className=" flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
          >
            
            {category}
          </div>
        );
      })}
     </div>
    </div>
  );
}

export default Listitems;
