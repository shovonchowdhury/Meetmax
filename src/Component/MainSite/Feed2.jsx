// src/components/Feed.js
import React from "react";
import "./Feed.css";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const Feed2 = () => {
  const posts = [
    {
      id: 1,
      user: "Serqual Gatley",
      time: "1h",
      content: "Beautiful day in Paris.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      user: "Prothina Thomas",
      time: "2h",
      content: "Exploring the mountains.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      user: "Prothina Thomas",
      time: "2h",
      content: "Exploring the mountains.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      user: "Prothina Thomas",
      time: "2h",
      content: "Exploring the mountains.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="w-2/5 p-4" style={{ maxHeight: "90vh" }}>
      {posts &&
        posts?.map((post) => (
          <div key={post.id} className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{post.user}</h3>
              <span className="text-gray-500">{post.time}</span>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="mb-4 rounded-lg" />
            )}
            <div className="flex justify-between items-center">
              <button className="flex items-center space-x-1 text-gray-500">
                <FaThumbsUp />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <FaComment />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Feed2;
