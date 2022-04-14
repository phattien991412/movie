import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/action/auth";
import "./style.css";
import { signInUserSchema } from "../../services/AuthService";
import logo from "../../assets/img/Layer2.png"

const Login = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signInUserSchema)
  });

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  return (
    <div className="bg-movie">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:flex my-auto">
        <div className="pt-32 mx-auto  w-full xl:max-w-screen-sm">
          <div className="bg-login mx-auto xl:w-1/2 lg:mt-10 rounded lg:w-2/5 md:w-1/2 w-4/5 g-opacity-60">
            <div >
              <div
                className="pt-4"
              >
                <div className="grid grid-cols-3">
                  <NavLink to="/" className="xl:w-2/5 lg:w-2/6 md:w-2/5 w-1/2 ml-10">
                    <img className="w-full" src={logo} alt="" />
                  </NavLink>
                  <h2 className="text-center text-4xl text-white font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Login</h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div>
                <div className="px-10">
                  <input
                    {...register("taiKhoan")}
                    name="taiKhoan"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Username"
                  />
                  <span className="text-red-600 text-xs">
                    {errors.taiKhoan?.message}
                  </span>
                </div>
                <div className="mt-8 px-10">
                  <div className="flex justify-between items-center"></div>
                  <input
                    {...register("matKhau")}
                    name="matKhau"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="text-red-600 text-xs">
                    {errors.matKhau?.message}
                  </span>
                </div>
                <div className="mt-10 px-10">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                  >
                    Log In
                  </button>
                </div>
              </div>
              <div className="mt-6 pb-8 text-sm font-display font-semibold text-white text-center">
                Don't have an account ?{" "}
                <NavLink
                  to="/register"
                  className="cursor-pointer text-indigo-300 hover:text-indigo-800"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
