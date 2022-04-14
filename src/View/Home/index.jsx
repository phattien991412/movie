import React, { useEffect } from "react";
import MovieList from "../../Components/MoviesList";
import HomeMenu from "./HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinema } from "../../store/action/cinema";
import HomeCarousel from "../../templates/HomeTemplates/Layout/HomeCarousel";

const Home = (props) => {
  const dispatch = useDispatch();
  const cinema = useSelector((state) => state.cinema.cinema);

  useEffect(() => {
    dispatch(fetchCinema());
  }, []);
  return (
    <div>
      <HomeCarousel />
      <div className="xl:container">
        <MovieList />
        <div className="xl:container">
          <HomeMenu cinema={cinema} />
        </div>
      </div>
    </div>
  );
};

export default Home;
