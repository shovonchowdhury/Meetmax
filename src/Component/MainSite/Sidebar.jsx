// src/components/Sidebar.js
import React from "react";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaUserFriends,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white p-4 shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Meetmax</h2>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FaHome />
          <span>Feed</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUserFriends />
          <span>My Community</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaBell />
          <span>Notification</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope />
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
