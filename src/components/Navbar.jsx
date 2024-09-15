import React, { useEffect, useState } from "react";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../public/profile.png";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";
function Navbar() {

  const [searchQuery,setSearchQuery]=useState("");



  const navigate = useNavigate();

  const searchQueryHandler =(event)=>{
    if((event?.key==="Enter" || event==="searchButton") && searchQuery?.length>0){
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    }
  }



  return (
    <div className="flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white">
      <div className="flex items-center space-x-4   ">
        <RxHamburgerMenu className="text-xl cursor-pointer hover:bg-gray-300 duration-300 rounded-3xl"  />
        <img src={logo} alt="youtube logo" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center  ">
        <div className="w-[100%] px-3 py-2 rounded-l-full border border-gray-300 ">
          <input type="text" placeholder="Search" className=" outline-none " 
            onChange={(e)=>setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full text-xl border-gray-300"
          onClick={()=>searchQueryHandler("searchButton")}
        >  
          <CiSearch />
        </button>
        <IoMdMic size={"45px"} className="ml-4 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />
      </div>
      <div className=" flex items-center space-x-5  ">
        <RiVideoAddLine className="text-2xl cursor-pointer"/>
        <AiOutlineBell className="text-2xl cursor-pointer"/>
        <Avatar src={profile  } size="30" round={true}c className="cursor-pointer" />
        </div> 
    </div>
  );
}

export default Navbar;
