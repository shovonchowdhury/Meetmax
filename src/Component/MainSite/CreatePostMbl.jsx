import React, { useState } from "react";
import createPostImg from "../../assets/createPostImg.png";
import { FaChevronDown } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import videoIcon from "../../assets/videoIcon.svg";
import photoIcon from "../../assets/photoIcon.svg";
import smileIcon from "../../assets/smileIcon.svg";
import { TiDeleteOutline } from "react-icons/ti";
export default function CreatePostMbl() {
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
    <div className="bg-gray-100 min-h-[100vh] pt-[70px]">
      <div className="bg-white min-h-[86vh] py-3 px-5">
        <div className="flex justify-between  items-center pb-3 border-b mb-4">
          <div className="text-[#4E5D78] flex gap-[8px] items-center">
            <Link to="/">
              <IoArrowBackSharp />
            </Link>
            <p className="text-sm font-medium">Create a post</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-[#4E5D78] text-[10px] ">Visible for</p>
            <button className="flex p-2 bg-gray-100 items-center gap-3 rounded-md text-[10px]">
              <span className="text-[#377DFF]">Friends</span>
              <FaChevronDown className="text-[#4E5D78]" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <img src={createPostImg} alt="" className="w-10 h-10 rounded-full" />
          <textarea
            name=""
            id=""
            // cols="50"
            // rows="10"
            className="bg-gray-100 resize-none w-full h-44 p-3 outline-0 rounded-md"
            placeholder="What’s happening?"
          ></textarea>
        </div>
        <div
          className={`grid gap-4 mb-4 ${
            uploadedPhotos?.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {uploadedPhotos &&
            uploadedPhotos?.map((photoURL, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 0 && uploadedPhotos.length > 2 && "row-span-2"
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
                      : uploadedPhotos.length > 2 && index === 0 && "h-full"
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
        <div className="">
          <div className=" ">
            <button className="flex gap-2 items-center text-[#4E5D78] py-2">
              <img src={videoIcon} alt="" />
              <span className="text-sm font-bold">Live span</span>
            </button>
            <label className="flex gap-2 items-center text-[#4E5D78] py-2 cursor-pointer">
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
            <button className="flex gap-2 items-center text-[#4E5D78] py-2">
              <img src={smileIcon} alt="" />
              <span className="text-sm font-bold">Feeling</span>
            </button>
          </div>
          <button className="bg-[#377DFF] text-white py-2 px-7 rounded-lg w-full mt-4">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
