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
  const [comment, setCommennt] = useState("");
  const [commentStack, setCommentStack] = useState([]);
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

  const handleChange = (e) => {
    //console.log(e.target.value);
    setCommennt(e.target.value);
  };
  const commentHandle = () => {
    if (comment) {
      const temp = [...commentStack, comment];

      setCommentStack(temp);
      console.log(temp);

      setCommennt("");
    }
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

        <div className="flex text-[#4E5D7899] gap-4 mt-3 mb-[12px]">
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

        <div className="relative w-full">
          <input
            type="text"
            id="default-search"
            onChange={handleChange}
            value={comment}
            className="block w-full px-4 h-[34px] pr-16 text-sm text-[#4E5D78] border border-gray-300 outline-0 rounded-md"
            placeholder="Write a comment..."
            required
          />

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
        <button
          onClick={commentHandle}
          className="px-3 h-[34px] bg-blue-100 rounded-md text-lg text-[#377DFF]"
        >
          <RiSendPlane2Line />
        </button>
      </div>
      {commentStack && (
        <div className={`${commentStack && " mt-2 md:mt-3"} space-y-2`}>
          {commentStack &&
            commentStack.map((cmnt, index) => (
              <div className="flex pl-2 gap-3 md:gap-5 ">
                <img
                  src={createPostImg}
                  alt=""
                  className="w-[35px] h-[35px] rounded-full mt-4"
                />
                <div className="w-full">
                  <div className="w-full bg-gray-100 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col justify-center">
                        <p className="text-sm text-[#4E5D78] font-medium mb-0">
                          Saleh Ahmed
                        </p>
                        <span className="text-xs font-medium mt-0 text-gray-400">
                          Just Now
                        </span>
                      </div>
                      <div>
                        <HiDotsHorizontal />
                      </div>
                    </div>
                    <div>
                      <p className="text-[#4E5D78]">{cmnt}</p>
                    </div>
                  </div>
                  <div className="space-x-3 font-medium mx-2">
                    <button className="text-gray-400 text-xs ">Like</button>
                    <button className="text-gray-400 text-xs">Reply</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
