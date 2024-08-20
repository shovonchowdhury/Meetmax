// src/components/RightSidebar.js
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const RightSidebar = () => {
  const friends = [
    { name: "Radwan Skillwava" },
    { name: "Kayleigh Bryouth" },
    // More friends
  ];

  const events = [
    { name: "Graduation Ceremony" },
    { name: "Photography Ideas" },
    // More events
  ];

  return (
    <div
      className="w-1/5 p-4 overflow-y-auto bg-white shadow-md"
      style={{ maxHeight: "90vh" }}
    >
      <div className="mb-6">
        <h3 className="font-bold">You Might Like</h3>
        <div className="flex items-center justify-between mt-4">
          <span>{friends[0].name}</span>
          <button className="flex items-center space-x-1 text-blue-500">
            <FaUserPlus />
            <span>Follow</span>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-bold">Recent Events</h3>
        <ul className="mt-4 space-y-2">
          {events &&
            events.map((event, index) => (
              <li key={index} className="text-gray-700">
                {event.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
