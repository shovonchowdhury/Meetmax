import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function ChatList({ usersData }) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center font-bold text-[#4E5D78]">
        <span>Friends</span>
        <PiDotsThreeOutlineFill />
      </div>
      <div className="space-y-[18px] mt-3">
        {usersData &&
          Array.isArray(usersData) &&
          usersData.map((data) => (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <img
                  src={data.user_photo}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <h3 className="font-medium text-[#4E5D78]">{data.username}</h3>
              </div>
              <div className="">
                {data.is_active ? (
                  <div className="w-[8px] h-[8px] rounded-full bg-[#38CB89]"></div>
                ) : (
                  <p className="text-gray-400">{data.last_active}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
