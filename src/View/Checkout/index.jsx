import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemaDetail } from "../../store/action/cinema";
import style from "./style.module.css";
import { moment } from "moment";
import { createAction } from "../../store/action";
import { actionType } from "../../store/action/type";
import { NavLink } from "react-router-dom";

const Checkout = (props) => {
  const { user } = useSelector((state) => state.user);
  const { thongTinPhim, danhSachGhe } = useSelector(
    (state) => state.cinema.cinemaDetail
  );

  const booking = useSelector((state) => state.cinema.bookingTicket);

  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchCinemaDetail(id));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12">
        {/* Chọn vị trí */}
        <div className="col-start-2 col-span-8 w-full ">
          <div className="flex flex-col justify-center mt-5 ">
            <div className="bg-black w-11/12 h-3  "></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-2 text-black text-base">Màn hình</h3>
            </div>

            <div className="ml-3 w-11/12 mt-10">
              <div className="flex flex-wrap">
                {danhSachGhe?.map((item, index) => {
                  let classGheVip =
                    item.loaiGhe === "Vip"
                      ? "border border-yellow-500 bg-yellow-500 rounded text-white text-sm w-8 py-1 m-3 cursor-pointer "
                      : "border border-gray-400 bg-gray-500 rounded text-white text-sm w-8 py-1 m-3 cursor-pointer ";

                  let classGheDaDat =
                    item.daDat === true
                      ? "border border-red-500 bg-red-500 rounded text-white text-sm w-8 py-1 m-3 cursor-pointer "
                      : "";

                  let classGheDangDat = "";
                  let indexTicket = booking.findIndex(
                    (seat) => seat.maGhe === item.maGhe
                  );

                  if (indexTicket != -1) {
                    classGheDangDat = "bg-green-500";
                  }

                  return (
                    <Fragment key={index}>
                      <button
                        onClick={() => {
                          dispatch(createAction(actionType.BOOK_TICKET, item));
                        }}
                        disabled={item.daDat}
                        className={`${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                      >
                        {item.daDat ? "X" : item.tenGhe}
                      </button>

                      {(index + 1) % 11 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin đặt vé */}
        <div className="col-start-10 col-span-3 mr-16 mt-2 ">
          <h3 className="text-green-500 text-center text-4xl">0d</h3>
          <hr />
          <h3 className="mt-3">{thongTinPhim?.tenPhim}</h3>
          <p>Địa điểm: {thongTinPhim?.tenCumRap}</p>
          <p>
            Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}{" "}
            {thongTinPhim?.tenRap}
          </p>
          <hr />
          <div className="grid grid-cols-4 my-5">
            <div className="col-start-1 col-span-2">
              <span className="text-red-500">Ghế: {danhSachGhe?.tenGhe}</span>

              {booking.map((item) => {
                return (
                  <span key={item.maGhe} className="text-green-500">
                    {" "}
                    {item.tenGhe}
                  </span>
                );
              })}
            </div>
            <div className="col-start-4 text-rigt ">
              <span className="text-green-500">0d</span>
            </div>
          </div>
          <hr />

          <div className="text-left">
            <label className="text-gray-500">Email</label>
            <p className="text-black">{user?.email}</p>
          </div>

          <div className="text-left">
            <label className="text-gray-500">Phone</label>
            <p className="text-black">{user?.soDT}</p>
          </div>
          <hr />
          <div className="mb-0 flex flex-col justify-end items-center">
            <div className="bg-green-500 text-white w-full text-center font-bold text-base p-2 cursor-pointer">
              ĐẶT VÉ
            </div>
            {/* <div>
              
              <button><NavLink to="/">Home</NavLink></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
