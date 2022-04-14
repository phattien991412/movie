import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../../store/action/movie";
import "./index.css";

const HomeCarousel = () => {
  // const banner = useSelector((state) => state.movie.movies);
  // console.log({ banner });
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  return (
    <Carousel autoplay effect="fade">
      <div className="banner-1"></div>
      <div className="banner-2"></div>
      <div className="banner-3"></div>
    </Carousel>
  );
};

export default HomeCarousel;
