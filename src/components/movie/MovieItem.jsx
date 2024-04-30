import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ item }) => {
  const { title, release_date, poster_path, vote_average, name, first_air_date } = item;
  const navigate = useNavigate();
  return (
    <div className="p-4 border border-border bg-dry rounded-lg">
      <img
        onClick={() => navigate(`/movie-detail/${item.id}`)}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="rounded-lg cursor-pointer"
        alt="Top rate img"
      />
      <div className="text-white mt-3 font-medium text-title truncate">{title || name}</div>
      <div className="flex justify-between items-center text-white mt-3">
        <span>{release_date || first_air_date}</span>
        <span className="flex items-center gap-1 text-white">
          {vote_average}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-start">
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="button-primary mt-4">
        <Button></Button>
      </div>
    </div>
  );
};

export default MovieItem;
