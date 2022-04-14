import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { signOut } from "../../../../store/action/auth";
import { fetchMe } from "../../../../store/action/user";
import { TOKEN } from "../../../../util/config";
import logo from "../../../../assets/img/Layer2.png";
import { Menu, Dropdown } from "antd";
const Header = (props) => {
  const checkLogin = !localStorage.getItem(TOKEN);
  const history = useHistory();
  const me = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect((user) => {
    dispatch(fetchMe(user));
  }, []);
  const handleLogout = () => {
    dispatch(
      signOut(() => {
        if (history.location.pathname === "/me") {
          history.push("/");
        }
      })
    );
  };

  const [header, setHeader] = useState(false);
  const changeLayoutHeader = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLayoutHeader);

    return () => window.removeEventListener("scroll", changeLayoutHeader);
  }, []);

  return (
    <header
      className={`p-4 bg-black bg-opacity-30 fixed w-full z-10  text-white ${
        header
          ? "p-4 bg-white bg-opacity-100 xl:fixed transition duration-300 border border-gray-300 "
          : "p-4 transition duration-500"
      }`}
    >
      <div className="xl:container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 xl:w-1/5 "
        >
          <img className="xl:w-1/4 w-1/2" src={logo} alt="logo" />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 xl:flex">
          <li className="flex">
            <NavLink
              to="/home"
              activeClassName={`${
                header
                  ? "border-b-2 border-blue-400"
                  : "border-b-2 border-white"
              }`}
              className={`flex items-center px-3 font-medium hover:text-green-500  ${
                header ? "text-black " : "text-white "
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              activeClassName={`${
                header
                  ? "border-b-2 border-blue-400"
                  : "border-b-2 border-white"
              }`}
              className={`flex items-center px-3 font-medium hover:text-green-500  ${
                header ? "text-black " : "text-white "
              }`}
            >
              Liên hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              activeClassName={`${
                header
                  ? "border-b-2 border-blue-400"
                  : "border-b-2 border-white"
              }`}
              className={`flex items-center px-3 font-medium hover:text-green-500  ${
                header ? "text-black " : "text-white "
              }`}
            >
              Tin tức
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden xl:flex">
          {checkLogin && (
            <NavLink to="/login">
              <button
                className={`text-sm font-semibold self-center px-4 rounded  ${
                  header ? "text-black " : "text-white"
                }`}
              >
                Sign in
              </button>
            </NavLink>
          )}

          {checkLogin ? (
            <NavLink to="/register">
              <button
                className={`text-sm font-semibold self-center px-4 rounded  ${
                  header ? "text-black" : "text-white"
                }`}
              >
                Sign up
              </button>
            </NavLink>
          ) : (
            <div>
              <span className="text-green-500 text-sm font-semibold">
                Hi, {me?.hoTen}{" "}
              </span>

              <button
                onClick={handleLogout}
                className={`px-8 font-semibold rounded ${
                  header ? "text-black" : ""
                }`}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
        <Dropdown className="xl:hidden"
          overlay={
            <Menu>
              <Menu.Item key="0">
              {checkLogin && (
            <NavLink to="/login">
              <button
                className="text-sm font-semibold self-center px-4 rounded text-black"
                
              >
                Sign in
              </button>
            </NavLink>
          )}
              </Menu.Item>
              <Menu.Item key="1">
              {checkLogin ? (
            <NavLink to="/register">
              <button
                className="text-sm font-semibold self-center px-4 rounded text-black "
              >
                Sign up
              </button>
            </NavLink>
          ) : (
            <div className="-mt-2">
            <span className="text-green-500 text-sm font-semibold">
              Hi, {me?.hoTen}{" "}
            </span>

            <button
              onClick={handleLogout}
              className={`pl-2 font-semibold rounded ${
                header ? "text-black" : ""
              }`}
            >
              Sign out
            </button>
          </div>
          )}
              </Menu.Item>
              
            </Menu>
          }
          trigger={["click"]}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <button className="p-4 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 ${header ? "text-black" : "text-white"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
