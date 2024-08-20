import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatBold } from "react-icons/pi";
import createPostImg from "../../assets/createPostImg.png";
import { FiSend } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { RiUserSmileLine } from "react-icons/ri";
import { RiSendPlane2Line } from "react-icons/ri";
import { RiFileGifLine } from "react-icons/ri";
import photoIcon from "../../assets/photoIcon.svg";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export default function Post({ data, usersData }) {
  const [liked, setliked] = useState(0);
  const { user_photo, username, post } = data;
  const {
    post_photo,
    post_caption,
    post_time,
    likes_count,
    comments_count,
    share_count,
  } = post;
  const maxVisibleAvatars = 3;
  const remainingAvatars = usersData.length - maxVisibleAvatars;

  const handleLikeButton = () => {
    if (liked) setliked(0);
    else setliked(1);
  };
  return (
    <div className="bg-white p-[18px] lg:rounded-2xl">
      <div className="flex justify-between items-center mb-[18px]">
        <div className="flex gap-5 items-center ">
          <img
            src={user_photo}
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <div>
            <h3 className="font-medium text-[#4E5D78]">{username}</h3>
            <p className="text-[#4E5D78] text-xs font-medium">
              {post_time}. Public
            </p>
          </div>
        </div>
        <div>
          <HiDotsHorizontal />
        </div>
      </div>
      <h3 className="pb-[18px] text-[#4E5D78]">{post_caption}</h3>
      <div
        className={`grid gap-2 lg:gap-3 ${
          post_photo.length === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {post_photo &&
          post_photo?.map((pphoto, index) => (
            <div
              key={index}
              className={`${
                index == 0 && post_photo.length == 3 && "row-span-2"
              }`}
            >
              <img
                src={pphoto.photo}
                alt=""
                className="rounded-2xl h-full object-cover"
              />
            </div>
          ))}
      </div>

      {/* <----------------Like    Comment      Share--------------> */}
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {usersData &&
            Array.isArray(usersData) &&
            usersData.slice(0, maxVisibleAvatars).map((user, index) => (
              <img
                key={index}
                src={user.user_photo}
                alt={user.username}
                className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] rounded-full"
                style={{
                  marginLeft: index !== 0 ? "-6px" : "0", // Overlap effect, adjusted for smaller size
                  zIndex: index + 1, // Right element stays on top
                }}
              />
            ))}

          {remainingAvatars > 0 && (
            <div
              className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] rounded-full bg-gray-600 flex items-center justify-center text-white text-xs "
              style={{
                marginLeft: "-6px", // Overlap effect for the counter
                zIndex: maxVisibleAvatars + 1, // Ensure this is on top
              }}
            >
              +{likes_count + liked}
            </div>
          )}
        </div>

        <div className="flex text-[#4E5D7899] gap-4 mb-[14px]">
          <p>{comments_count} Comments</p>
          <p>{share_count} Shares</p>
        </div>
      </div>
      <div className="flex justify-between border-t border-b py-2">
        <button
          onClick={handleLikeButton}
          className={`flex ${
            liked ? "text-[#377DFF]" : "text-[#4E5D78]"
          } items-center gap-[10px] font-medium`}
        >
          <RiHeart2Fill />
          <span>Like</span>
        </button>
        <button className="flex text-[#4E5D78] items-center gap-[10px] font-medium">
          <FaRegComment />
          <span>Comments</span>
        </button>
        <button className="flex text-[#4E5D78] items-center gap-[10px] font-medium">
          <PiShareFatBold />
          <span>Share</span>
        </button>
      </div>

      <div className="flex gap-[10px] items-center mt-[14px] w-full">
        <img
          src={createPostImg}
          alt=""
          className="h-[32px] w-[32px]   lg:h-[40px] lg:w-[40px] rounded-full"
        />
        {/* <div className="flex items-center p-2 rounded-xl bg-gray-100 w-full ">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-transparent outline-none px-2"
          />
          <div className="flex items-center space-x-2">
            <FiFile className="text-gray-500" />
            <FiImage className="text-gray-500" />
            <RiUserSmileLine className="text-gray-500" />
          </div>
        </div> */}
        <div className="relative w-full">
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 h-[34px] pr-16 text-sm text-[#4E5D78] border border-gray-300 outline-0 rounded-md"
            placeholder="Write a comment..."
            required
          />
          {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
          <div className="flex absolute gap-1 end-2.5 bottom-2.5">
            <button>
              <FiFile className="text-gray-500" />
            </button>
            <button>
              <FiImage className="text-gray-500" />
            </button>
            <button>
              <RiUserSmileLine className="text-gray-500" />
            </button>
          </div>
        </div>
        <button className="px-3 h-[34px] bg-blue-100 rounded-md text-lg text-[#377DFF]">
          <RiSendPlane2Line />
        </button>
      </div>
    </div>
  );
}
