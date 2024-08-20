// src/components/Feed.js
import React, { useState, useRef } from "react";
import "./Feed.css";
import createPostImg from "../../assets/createPostImg.png";
import videoIcon from "../../assets/videoIcon.svg";
import photoIcon from "../../assets/photoIcon.svg";
import smileIcon from "../../assets/smileIcon.svg";
import image from "../../assets/Ellipse 535.svg";
import book from "../../assets/book.svg";
import camera from "../../assets/camera.svg";
import birthday from "../../assets/birthday.svg";
import { Link, useOutletContext } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { RiFacebookBoxLine, RiSendPlane2Line } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Posts from "./Posts";
import ChatList from "./ChatList";
import SwiperComponent from "./SwiperComponent";
import { TiDeleteOutline } from "react-icons/ti";

const Feed = () => {
  const usersData = useOutletContext();
  console.log(usersData.length);

  console.log(Array.isArray(usersData));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleClick = (event) => {
    const { top, left } = event.target.getBoundingClientRect();
    setModalPosition({ top: top - 10, left });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const maxVisibleAvatars = 3;
  const remainingAvatars = usersData.length - maxVisibleAvatars;

  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files?.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDeletePhoto = (photoURL) => {
    setUploadedPhotos((prevPhotos) =>
      prevPhotos.filter((photo) => photo !== photoURL)
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-20 lg:mt-0">
      <div className=" bg-gray-100 lg:rounded-3xl col-span-3 grid grid-cols-1 lg:grid-cols-3 py-2 lg:pt-7  lg:pb-0 lg:px-7 gap-7">
        <div
          className="col-span-2  lg:overflow-y-scroll no-scrollbar md:max-h-[202vh] pb-10"
          // style={{ maxHeight: "202vh" }}
        >
          {/* for create post-------------------------------- */}
          <div className="hidden lg:block p-5 bg-white lg:rounded-2xl space-y-5 mb-6">
            <div className="flex gap-4">
              <img
                src={createPostImg}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <input
                onClick={handleClick}
                type="text"
                name=""
                id=""
                placeholder="What’s happening?"
                className="rounded-lg bg-gray-100 w-full p-3 "
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <button className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2">
                  <img src={videoIcon} alt="" />
                  <span className="text-sm font-bold">Live span</span>
                </button>
                <button className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2">
                  <img src={photoIcon} alt="" />
                  <span className="text-sm font-bold">Photo/Video</span>
                </button>
                <button className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2">
                  <img src={smileIcon} alt="" />
                  <span className="text-sm font-bold">Feeling</span>
                </button>
              </div>
              <button className="bg-[#377DFF] text-white py-2 px-7 rounded-lg">
                Post
              </button>
            </div>
          </div>
          <Link to="/createPost">
            <div className="lg:hidden p-5 bg-white lg:rounded-2xl space-y-3 mb-2">
              <div className="flex gap-4">
                <img
                  src={createPostImg}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <input
                  onClick={() => setOpen(true)}
                  type="text"
                  name=""
                  id=""
                  placeholder="What’s happening?"
                  className="rounded-lg bg-gray-100 w-full h-[40px] px-2"
                />
              </div>
              <div></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex gap-2 items-center text-[#4E5D78] hover:bg-gray-100 rounded-md py-2">
                    <img src={videoIcon} alt="" />
                    <span className="text-sm font-bold">Live</span>
                  </button>
                  <button className="flex gap-2 items-center text-[#4E5D78] hover:bg-gray-100 rounded-md py-2">
                    <img src={photoIcon} alt="" />
                    <span className="text-sm font-bold">Photo</span>
                  </button>
                  <button className="flex gap-2 items-center text-[#4E5D78]  hover:bg-gray-100 rounded-md py-2">
                    <img src={smileIcon} alt="" />
                    <span className="text-sm font-bold">Feeling</span>
                  </button>
                </div>
                <button className="bg-[#377DFF] text-white py-1 px-4 rounded-lg">
                  Post
                </button>
              </div>
            </div>
          </Link>

          {/* <-----------------------------Tring to handle modal------------------------------> */}

          {isModalOpen && (
            <>
              <div
                className="fixed inset-0 bg-black opacity-50 "
                style={{
                  zIndex: 100,
                }}
                onClick={closeModal}
              ></div>
              <div
                className="absolute bg-white shadow-lg rounded-2xl z-20 "
                style={{
                  top: modalPosition.top - 10,
                  left: modalPosition.left - 100,
                  zIndex: 1000,
                }}
              >
                <div className="w-[520px] ">
                  <div className="flex justify-between p-5 items-center border-b mb-5">
                    <p className="text-[#4E5D78] font-bold">Create a post</p>
                    <div className="flex gap-5 items-center">
                      <div className="flex gap-5 items-center">
                        <p className="text-[#4E5D78] ">Visible for</p>
                        <button className="flex p-2 bg-gray-100 items-center gap-3 rounded-md">
                          <span className="text-[#377DFF]">Friends</span>
                          <FaChevronDown className="text-[#4E5D78]" />
                        </button>
                      </div>
                      <button
                        onClick={closeModal}
                        className="text-[#4E5D78] text-xl font-bold"
                      >
                        <IoIosCloseCircleOutline />
                      </button>
                    </div>
                  </div>
                  <div className="px-5">
                    <div className="flex gap-4 mb-7">
                      <img
                        src={createPostImg}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      <textarea
                        name=""
                        id=""
                        className="bg-gray-100 resize-none w-full h-[110px] p-3 outline-0 rounded-lg"
                        placeholder="What’s happening?"
                      ></textarea>
                    </div>
                    <div
                      className={`grid gap-4 mb-4 ${
                        uploadedPhotos?.length === 1
                          ? "grid-cols-1"
                          : "grid-cols-2"
                      }`}
                    >
                      {uploadedPhotos &&
                        uploadedPhotos?.map((photoURL, index) => (
                          <div
                            key={index}
                            className={`relative ${
                              index === 0 &&
                              uploadedPhotos.length > 2 &&
                              "row-span-2"
                            }`}
                          >
                            <img
                              src={photoURL}
                              alt={`Uploaded ${index + 1}`}
                              className={`w-full object-cover rounded-lg ${
                                uploadedPhotos.length === 1
                                  ? "h-[298px]"
                                  : uploadedPhotos.length === 2
                                  ? "h-[149px]"
                                  : uploadedPhotos.length > 2 &&
                                    index === 0 &&
                                    "h-full"
                              } `}
                            />
                            <button
                              onClick={() => handleDeletePhoto(photoURL)}
                              className="absolute top-2 right-2"
                            >
                              <TiDeleteOutline className="h-4 w-4 text-[#4E5D78]" />
                            </button>
                          </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pb-7">
                      <div className="flex items-center ">
                        <button className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2">
                          <img src={videoIcon} alt="" />
                          <span className="text-sm font-bold">Live span</span>
                        </button>
                        <label className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2 cursor-pointer">
                          <img src={photoIcon} alt="photoIcon" />
                          <span className="text-sm font-bold">Photo/Video</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </label>
                        <button className="flex gap-2 items-center text-[#4E5D78] px-3 hover:bg-gray-100 rounded-md py-2">
                          <img src={smileIcon} alt="" />
                          <span className="text-sm font-bold">Feeling</span>
                        </button>
                      </div>
                      <button
                        onClick={closeModal}
                        className="bg-[#377DFF] text-white py-2 px-7 rounded-lg"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* for existing post --------------------------------------------------*/}
          <Posts usersData={usersData}></Posts>
        </div>

        {/* <---------------------------------Middle Elements--------------------------------> */}

        <div className="hidden lg:block space-y-7">
          {/* <----------------First Item----------------> */}
          <div className="bg-white py-[14px] rounded-2xl">
            <div className="flex justify-between items-center px-[14px] pb-2 border-b">
              <p className="text-[#4E5D78] font-bold">You Might Like</p>
              <a href="" className="text-sm text-[#377DFF]">
                See All
              </a>
            </div>

            <div className=" px-[14px] pt-5 space-y-5">
              <div className="flex gap-5 items-center">
                <img src={image} alt="" />
                <div>
                  <p className="text-[#4E5D78] font-medium">
                    Radovan SkillArena
                  </p>
                  <p className="text-gray-500 text-xs font-medium">
                    Founder & CEO at Trophy
                  </p>
                </div>
              </div>
              <div className="flex justify-end pr-8 gap-4 text-[#4E5D78]">
                <button>
                  <BiWorld />
                </button>
                <button>
                  <RiFacebookBoxLine />
                </button>
                <button>
                  <LuTwitter />
                </button>
                <button>
                  <FaInstagram />
                </button>
              </div>
              <div className=" space-x-4">
                <button className="px-6 py-2 text-gray-500 hover:text-white bg-white  hover:bg-[#377DFF] border rounded-lg font-medium">
                  Ignore
                </button>
                <button className="px-6 py-2 text-gray-500 hover:text-white bg-white  hover:bg-[#377DFF] border rounded-lg font-medium">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* <--------------------Second Item---------------> */}

          <div className="bg-white py-[14px] rounded-2xl">
            <div className="flex justify-between items-center px-[10px] pb-2 border-b">
              <p className="text-[#4E5D78] font-bold">Recent Event</p>
              <button>
                <PiDotsThreeOutlineFill />
              </button>
            </div>
            <div className="mx-[10px] p-2 bg-gray-100 rounded-lg mt-5">
              <div className="flex gap-3 border-b border-b-gray-300 pb-3">
                <div className=" w-[60px] h-[40px] rounded-md bg-green-300 px-2 flex justify-center">
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
                  11 seen
                </span>
                <div className="flex items-center space-x-2">
                  {usersData &&
                    Array.isArray(usersData) &&
                    usersData.slice(0, maxVisibleAvatars).map((user, index) => (
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

            <div className="mx-[10px] p-2 bg-gray-100 rounded-lg mt-4">
              <div className="flex gap-3 border-b border-b-gray-300 pb-3">
                <div className="w-[60px] h-[40px]  rounded-md bg-[#FF9880] px-2 flex justify-center">
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
                    usersData.slice(0, maxVisibleAvatars).map((user, index) => (
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

          {/* <------------------------Third Item----------------> */}
          <div className="bg-white py-[14px] rounded-2xl">
            <div className="flex justify-between items-center px-[10px] pb-2 border-b">
              <p className="text-[#4E5D78] font-bold">Birthdays</p>
              <a href="" className="text-sm text-[#377DFF]">
                See All
              </a>
            </div>
            <div className="mx-[10px]   rounded-lg mt-5">
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
                  className="py-1 px-2 bg-gray-100 rounded-lg outline-0 w-5/6"
                />
                <button className="px-2 py-1 bg-blue-100 rounded-md text-lg text-[#377DFF]">
                  <RiSendPlane2Line />
                </button>
              </div>
            </div>

            <div className="mx-[10px] px-2 pb-1 pt-2 bg-gray-100 rounded-lg mt-4">
              <div className="flex gap-3 pb-3">
                <div className="w-[60px] h-[40px] rounded-md bg-[#FFFFFFCC] px-2 py-2 flex justify-center">
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
      </div>
      <div className="pl-4 lg:pr-4 order-first lg:order-none">
        <form
          action="#"
          method="GET"
          className="relative flex flex-1 hidden lg:block"
        >
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[1px] left-4 h-full w-5 text-[#4E5D78]"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Search Friends!"
            className="block  mb-7 w-full   py-2 px-11  pr-0 text-gray-900  placeholder:text-gray-400  sm:text-sm rounded-xl border-2"
          />
        </form>
        {/* <Carousel usersData={usersData}></Carousel> */}
        <SwiperComponent usersData={usersData} />
        <div className="hidden lg:block">
          <ChatList usersData={usersData}></ChatList>
        </div>
      </div>
    </div>
  );
};

export default Feed;
