import React from "react";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

function SearchCard({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 md:p-4 ">
          {/* Channel thumbnail and  video duration*/}
          <div className=" relative h-48 flex w-full md:w-80">
            <img
              className="h-full w-full object-cover rounded-lg "
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo */}
          <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              {/* video Title */}
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              {/* Channel name */}
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              {/*Views */}
              <div className="flex text-gray-500 text-[12px]">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                {/*Posted date */}
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
