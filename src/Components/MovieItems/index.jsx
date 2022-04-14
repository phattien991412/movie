import React from "react";
import { NavLink } from "react-router-dom";
import notFoundImg from "../../assets/img/notfound.jpg";

const MovieItems = (props) => {
  const { hinhAnh, tenPhim, moTa, maPhim } = props.item;

  return (
    <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg ">
      <div
        style={{
          backgroundImage: `url(${notFoundImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "18rem"
        }}
      >
        <img
          loading="lazy"
          className=" w-full h-72  object-cover object-center"
          src={hinhAnh}
          alt="movie"
        />
      </div>

      <div className="pt-2 pl-2">
        <h1
          style={{ height: "5rem" }}
          className="title-font text-lg font-medium text-gray-900 mb-3"
        >
          {tenPhim}
        </h1>
        <p style={{ height: "4rem" }} className="leading-relaxed mb-3">
          {moTa.substr(0, 100) + "..."}
        </p>
        <div className="flex items-center flex-wrap ">
          <NavLink to={`/detail/${maPhim}`} className="text-white bg-yellow-500 rounded inline-flex items-center p-2 my-3 hover:text-red-500">
            Chi tiết
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
