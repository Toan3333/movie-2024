import React, { useEffect, useState } from "react";
import CastItem from "./CastItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e9d95f64abbe23c41e8c99c95dd78be9`
        );
        const data = response.data.cast;
        setCast(data);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div className="cast-list">
      <Swiper
        grabCursor={"true"}
        speed={1500}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={"auto"}>
        {cast.slice(0, 20).map((item) => (
          <SwiperSlide key={item.cast_id}>
            <CastItem item={item}></CastItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
