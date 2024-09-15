import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdEmojiFlags } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgPlayButtonR } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { BsQuestionCircle } from "react-icons/bs";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineFeedback } from "react-icons/md";
import { PiLightbulbLight } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { PiCoatHanger } from "react-icons/pi";


function Sidebar() {
  const SidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const SidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <BiSolidVideos   />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
        id: 3,
        name: "Playlists",
        icon: <MdOutlinePlaylistPlay />,
      },
    {
      id: 4,
      name: "Your Videos",
      icon: <CgPlayButtonR />,
    },
    {
        id: 5,
        name: "Watch Later",
        icon: <MdWatchLater />,
    },
    {
        id: 6,
        name: "Liked Videos",
        icon: <AiOutlineLike />,
      },
  ];
  const SidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsFire   />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
        id: 3,
        name: "Music",
        icon: <PiMusicNoteLight />,
      },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
        id: 5,
        name: "Live",
        icon: <CgMediaLive />,
    },
    {
        id: 6,
        name: "Gaming",
        icon: <SiYoutubegaming />,
    },
    {
        id: 7,
        name: "News",
        icon: <IoNewspaperOutline />,
    },
    {
        id: 8,
        name: "Sport",
        icon: <TfiCup />,
    },
    {
        id: 9,
        name: "Courses",
        icon: <PiLightbulbLight />,
    },
    {
        id: 10,
        name: "Fashion & beauty",
        icon: <PiCoatHanger />,
    },
    {
        id: 11,
        name: "Podcasts",
        icon: <MdPodcasts />,
    }

  ];
  const SidebarItems4 = [
    {
      id: 1,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 2,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 3,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const SidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <SiYoutubestudio />,
    },
    {
      id: 2,
      name: "Report History",
      icon: <MdEmojiFlags />,
    },
    {
      id: 3,
      name: "Help",
      icon: <BsQuestionCircle />,
    },
    {
      id:4,
      name: "Send Feedback",
      icon: <MdOutlineFeedback />,
    },
  ];
  return (
    <div className=" w-[25%] px-6 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden  scrollbar-hide" >
      <div className=" space-y-2 items-center">
        {SidebarItems.map((items) => {
          return (
            <div key={items.id} className="  flex items-center hover:bg-gray-300 duration-300 rounded-2xl space-x-6 pr-8 p-1">
              <div className=" text-xl  cursor-pointer  "> {items.icon} </div>
              <span className="cursor-pointer"> {items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You part*/}
      <div className=" mt-4 space-y-2 items-center">
        <div className="flex items-center space-x-2">
            <h1>You </h1>
            <FaChevronRight className="text-sm" />
        </div>

        {SidebarItems2.map((items) => {
          return (
            <div key={items.id} className="flex items-center hover:bg-gray-300 duration-300 rounded-2xl space-x-6 pr-8 p-1">
              <div className=" text-xl  cursor-pointer  "> {items.icon} </div>
              <span className="cursor-pointer"> {items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*Explore*/}
      <div className=" mt-4 space-y-2 items-center">
        <div className=" items-center space-x-2">
            <h1 className="font-semibold">Explore</h1>
        </div>

        {SidebarItems3.map((items) => {
          return (
            <div key={items.id} className="flex items-center hover:bg-gray-300 duration-300 rounded-2xl space-x-6 pr-8 p-1">
              <div className=" text-xl  cursor-pointer  "> {items.icon} </div>
              <span className="cursor-pointer"> {items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* More section yt*/}
      <div className=" mt-4 space-y-2 items-center">
        <div className="flex items-center space-x-2">
            <h1>More from Youtube </h1>
            
        </div>

        {SidebarItems4.map((items) => {
          return (
            <div key={items.id} className="flex items-center hover:bg-gray-300 duration-300 rounded-2xl space-x-6 pr-8 p-1">
              <div className=" text-xl  cursor-pointer text-red-600 "> {items.icon} </div>
              <span className="cursor-pointer"> {items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Settings part*/}
      <div className=" mt-4 space-y-2 items-center">
        {SidebarItems5.map((items) => {
          return (
            <div key={items.id} className="flex items-center hover:bg-gray-300 duration-300 rounded-2xl space-x-6 pr-8 p-1">
              <div className=" text-xl  cursor-pointer  "> {items.icon} </div>
              <span className="cursor-pointer"> {items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Copyright part*/}
      <span className="text-xs font-semibold cursor-pointer items-center" >
          About <br /> Press  <br /> Copyright <br />   Contact us <br /> Creator <br /> Advertise <br /> 
          Developers

          <br />
           Terms <br />  Privacy <br /> Policy & Safety <br /> How YouTube works <br /> Test new features 

      </span>
      <br />
      
      <p className="text-xs">  © 2024 Vaibhav </p>
    </div>
  );
}

export default Sidebar;
