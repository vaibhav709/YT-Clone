import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SuggestedVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3 ">
          {/* Channel thumbnail and  video duration*/}
          <div className=" relative h-24  lg:h-20 xl:h-24 xl:min-w-[168px]  w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
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

export default SuggestedVideo;
