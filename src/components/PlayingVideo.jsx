import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiOutlineLike } from "react-icons/ai";
import SuggestedVideo from "./SuggestedVideo";
function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
      });
      
  };

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16 ">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row ">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6 ">
          <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0 ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
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
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>

              {/*Posted date */}
              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
          <div className="flex mt-4 md:mt-0">
            <div className="flex items-center justify-center h-11 px-6 rounded-3x1 bg-white/[0.15]">
              <AiOutlineLike className="text-xl mr-2" />
              {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
            </div>
            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </div>
          </div>
          <div>
              <span className="font-bold"></span>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {   
            relatedVideo?.contents?.map((item, index) =>{
              if(item?.type!=="video") return false;
              return (
                <SuggestedVideo key={index} video={item?.video} />

              )
            })
            
          }
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
