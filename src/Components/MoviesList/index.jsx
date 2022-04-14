import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/action/movie";
import MovieItems from "../MovieItems";
import Slider from "react-slick";
import "./style.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // const [allMovie, setAllMovie] = useState(true);
  // const handleAllMovie = () => {
  //   setAllMovie(true);
  //   setShowingMovie(false);
  //   setComingMovie(false);
  // };

  // const [showingMovie, setShowingMovie] = useState(false);
  // const handleMovieShowing = () => {
  //   setShowingMovie(true);
  //   setAllMovie(false);
  //   setComingMovie(false);
  // };

  // const [comingMovie, setComingMovie] = useState(false);
  // const handleMovieComing = () => {
  //   setComingMovie(true);
  //   setAllMovie(false);
  //   setShowingMovie(false);
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 600,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const settingsComing = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "10px",
  //   slidesToShow: 5,
  //   speed: 600,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         initialSlide: 3
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
    <section className="text-gray-600">
      <div className="lg:px-5 pt-10 pb-24 mx-auto">
        <h1 className="text-center lg:text-5xl text-xl pb-5">Danh sách phim</h1>

        {/* <button
          onClick={handleAllMovie}
          type="button"
          className="lg:ml-0 ml-4 px-5 mr-5 mb-3 py-3 font-semibold rounded-full bg-blue-400 text-white"
        >
          Tất cả
        </button>

        <button
          onClick={handleMovieShowing}
          type="button"
          className="px-8 mr-3 mb-3 py-3 font-semibold rounded-full bg-green-400 text-white"
        >
          Đang chiếu
        </button>
        <button
          onClick={handleMovieComing}
          type="button"
          className="px-8 ml-3 mb-3 py-3 font-semibold rounded-full bg-red-500 text-white"
        >
          Sắp chiếu
        </button> */}

        
          <Slider {...settings}>
            {movies.map((item) => {
              return (
                <div
                  key={item.maPhim}
                  className="md:p-1 p-2 mb-2"
                  style={{ height: "33rem" }}
                >
                  <MovieItems item={item} />
                </div>
              );
            })}
          </Slider>
      

        {/* {showingMovie && (
          <Slider {...settingsComing}>
            {movies
              .filter((movie) => movie.dangChieu === true)
              .map((item) => {
                return (
                  <div
                    key={item.maPhim}
                    className="p-2 mb-2"
                    style={{ height: "33rem" }}
                  >
                    <MovieItems item={item} />
                  </div>
                );
              })}
          </Slider>
        )}

        {comingMovie && (
          <Slider {...settingsComing}>
            {movies
              .filter((movie) => movie.sapChieu === true)
              .map((item) => {
                return (
                  <div
                    key={item.maPhim}
                    className="p-2 mb-2"
                    style={{ height: "33rem" }}
                  >
                    <MovieItems item={item} />
                  </div>
                );
              })}
          </Slider>
        )} */}
      </div>
    </section>
  );
};

export default MovieList;
