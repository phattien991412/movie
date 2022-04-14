import { useFormik } from "formik";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { registerUserSchema } from "../../services/AuthService";
import { registerForm } from "../../store/action/auth";
import { GROUPID } from "../../util/config";
import "./style.css";
import logo from "../../assets/img/Layer2.png"

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: GROUPID
    },
    validationSchema: registerUserSchema
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      formik.setTouched({
        taiKhoan: true,
        matKhau: true,
        email: true,
        soDt: true,
        hoTen: true
      });

      if (!formik.isValid) return;

      dispatch(
        registerForm(formik.values, () => {
          formik.resetForm();
        })
      );
      
    },
    [dispatch, formik]
  );

  return (
    <div className="bg-movie">
      <form onSubmit={handleSubmit} className="lg:flex">
        <div className=" mx-auto lg:pt-32 pt-24 w-full xl:max-w-screen-sm">
          <div className="bg-login mx-auto  rounded xl:w-3/5 lg:w-2/5 md:w-1/2 w-4/5 g-opacity-60">
          <div>
              <div
                className="pt-4"
              >
                <div className="grid grid-cols-3">
                  <NavLink to="/" className="xl:w-2/5 lg:w-2/6 md:w-2/5 md:ml-10 w-1/2 ml-2">
                    <img className="w-full" src={logo} alt="" />
                  </NavLink>
                  <h2 className="text-center text-4xl xl:-ml-6 lg:ml-0 -ml-10 text-white font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Register</h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div>
                <div className="px-10">
                  <input
                    value={formik.values.taiKhoan}
                    onChange={formik.handleChange}
                    name="taiKhoan"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Username"
                  />
                  {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                    <span className="text-sm text-red-500">
                      {formik.errors.taiKhoan}
                    </span>
                  )}
                </div>
                <div className="mt-4 px-10">
                  <div className="flex justify-between items-center"></div>
                  <input
                    value={formik.values.matKhau}
                    onChange={formik.handleChange}
                    name="matKhau"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-4 px-10">
                  <div className="flex justify-between items-center"></div>
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-4 px-10">
                  <div className="flex justify-between items-center"></div>
                  <input
                    value={formik.values.soDt}
                    onChange={formik.handleChange}
                    name="soDt"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <div className="mt-4 px-10">
                  <div className="flex justify-between items-center"></div>
                  <input
                    value={formik.values.hoTen}
                    onChange={formik.handleChange}
                    name="hoTen"
                    className="w-full text-base py-2 border-b border-gray-300 rounded pl-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="mt-8 px-10">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="mt-6 pb-8 text-sm font-display font-semibold text-white text-center">
                Already have an account ?{" "}
                <NavLink
                  to="/login"
                  className="cursor-pointer text-indigo-300 hover:text-indigo-800"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
