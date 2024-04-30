import React from "react";

const CastItem = ({ item }) => {
  const { name, profile_path } = item;
  return (
    <div className="w-full p-3 border border-gray-800 bg-dry rounded">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        className="w-full h-64 object-cover rounded-lg"
        alt="cast-img"
      />
      <div className="text-white mt-4 text-center">{name}</div>
    </div>
  );
};

export default CastItem;
