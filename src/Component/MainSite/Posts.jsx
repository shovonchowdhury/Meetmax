import React from "react";
import Post from "./Post";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import book from "../../assets/book.svg";
import camera from "../../assets/camera.svg";
import createPostImg from "../../assets/createPostImg.png";
import { RiSendPlane2Line } from "react-icons/ri";
import birthday from "../../assets/birthday.svg";

export default function Posts({ usersData }) {
  const maxVisibleAvatars = 3;
  const remainingAvatars = usersData.length - maxVisibleAvatars;

  return (
    <div className="space-y-2 lg:space-y-8">
      {usersData &&
        Array.isArray(usersData) &&
        usersData.map((eachData, index) => (
          <div>
            {console.log(eachData)}
            <Post
              key={eachData.post.post_id}
              data={eachData}
              usersData={usersData}
            ></Post>
            <div
              className={` ${
                index > 0 && "hidden"
              }  bg-white py-[14px] mt-2 px-5 lg:rounded-2xl lg:hidden`}
            >
              <div className="flex justify-between items-center  pb-2 border-b">
                <p className="text-[#4E5D78] font-bold">Recent Event</p>
                <button>
                  <PiDotsThreeOutlineFill />
                </button>
              </div>
              <div className=" p-4 bg-gray-100 rounded-lg mt-5">
                <div className="flex gap-4 border-b border-b-gray-300 pb-3">
                  <div className="w-[50px] h-[50px] rounded-md bg-green-300 px-2 flex justify-center">
                    <img src={book} alt="" className="" />
                  </div>
                  <div>
                    <p className="font-medium text-[#4E5D78]">
                      Graduation Ceremony
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      The graduation ceremony is also sometimes called...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#4E5D78] text-xs font-medium">
                    8 seen
                  </span>
                  <div className="flex items-center space-x-2">
                    {usersData &&
                      Array.isArray(usersData) &&
                      usersData
                        .slice(0, maxVisibleAvatars)
                        .map((user, index) => (
                          <img
                            key={index}
                            src={user.user_photo}
                            alt={user.username}
                            className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full"
                            style={{
                              marginLeft: index !== 0 ? "-6px" : "0", // Overlap effect, adjusted for smaller size
                              zIndex: index + 1, // Right element stays on top
                            }}
                          />
                        ))}

                    {remainingAvatars > 0 && (
                      <div
                        className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full bg-gray-600 flex items-center justify-center text-white text-xs "
                        style={{
                          marginLeft: "-6px", // Overlap effect for the counter
                          zIndex: maxVisibleAvatars + 1, // Ensure this is on top
                        }}
                      >
                        +5
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className=" p-4 bg-gray-100 rounded-lg mt-4">
                <div className="flex gap-4 border-b border-b-gray-300 pb-3">
                  <div className="w-[50px] h-[50px]  rounded-md bg-[#FF9880] px-2 flex justify-center">
                    <img src={camera} alt="" className="" />
                  </div>
                  <div>
                    <p className="font-medium text-[#4E5D78]">
                      Photography Ideas
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      Reflections. Reflections work because they can create...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#4E5D78] text-xs font-medium">
                    11 seen
                  </span>
                  <div className="flex items-center space-x-2">
                    {usersData &&
                      Array.isArray(usersData) &&
                      usersData
                        .slice(0, maxVisibleAvatars)
                        .map((user, index) => (
                          <img
                            key={index}
                            src={user.user_photo}
                            alt={user.username}
                            className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full"
                            style={{
                              marginLeft: index !== 0 ? "-6px" : "0", // Overlap effect, adjusted for smaller size
                              zIndex: index + 1, // Right element stays on top
                            }}
                          />
                        ))}

                    {remainingAvatars > 0 && (
                      <div
                        className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full bg-gray-600 flex items-center justify-center text-white text-xs "
                        style={{
                          marginLeft: "-6px", // Overlap effect for the counter
                          zIndex: maxVisibleAvatars + 1, // Ensure this is on top
                        }}
                      >
                        +5
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` ${
                index != usersData.length - 1 && "hidden"
              }  bg-white py-[14px] mt-2 px-5 lg:hidden`}
            >
              <div className="flex justify-between items-center  pb-2 border-b">
                <p className="text-[#4E5D78] font-bold">Birthdays</p>
                <a href="" className="text-sm text-[#377DFF]">
                  See All
                </a>
              </div>
              <div className="   rounded-lg mt-5">
                <div className="flex gap-4 pb-3">
                  <img
                    src={createPostImg}
                    alt=""
                    className="w-[40px] h-[40px] rounded-lg"
                  />
                  <div>
                    <p className="font-medium text-[#4E5D78]">
                      Edilson De Carvalho
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      Birthday today
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Write on his inbox"
                    className="py-1 px-3 bg-gray-100 rounded-lg outline-0 w-full"
                  />
                  <button className="px-2 py-1 bg-blue-100 rounded-md text-lg text-[#377DFF]">
                    <RiSendPlane2Line />
                  </button>
                </div>
              </div>

              <div className="p-3 bg-gray-100 rounded-lg mt-4">
                <div className="flex gap-4 pb-3">
                  <div className="w-[50px] h-[50px] rounded-md bg-[#FFFFFFCC] px-2 py-2 flex justify-center">
                    <img src={birthday} alt="" className="" />
                  </div>
                  <div>
                    <p className="font-medium text-[#4E5D78]">
                      Upcoming birthdays
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      See 12 others have upcoming birthdays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
