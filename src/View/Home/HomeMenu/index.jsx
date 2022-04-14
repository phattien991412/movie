import React, { Fragment, useState } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;
import "./index.css"

const HomeMenu = (props) => {
  const [state] = useState({
    tabPosition: "left"
  });

  const cinema = props.cinema;
  console.log("cinema", cinema);

  const { tabPosition } = state;
  return (
    <div style={{height: 600}} className="lg:container overflow-hidden overflow-y-scroll md:block hidden">
      <Tabs tabPosition={tabPosition}>
        {cinema.map((item) => {
          return (
            <TabPane className="tabss"
              key={item.maHeThongRap}
              tab={<img loading="lazy" src={item.logo} className="rounded-full" width="50" />}
            >
              <Tabs tabPosition={tabPosition}>
                {item.lstCumRap.map((cinema) => {
                  return (
                    <TabPane className="tab"
                      key={cinema.maCumRap}
                      tab={
                        <div className="flex flex-auto">
                          <img loading="lazy"
                            src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                            width="50"
                          />
                          <div className="text-left pl-2 ">
                            <p className="m-0">{cinema.tenCumRap}</p>
                            <p className="m-0">{cinema.diaChi}</p>
                            <p className="m-0 text-red-500">[Chi tiết]</p>
                          </div>
                        </div>
                      }
                    >
                      {/* Load danh sach phim */}
                      {cinema.danhSachPhim.map((movie) => {
                        return (
                          <Fragment key={movie.maPhim}>
                            <div>
                              <div className="flex flex-auto flex-wrap">
                                <img
                                  loading="lazy"
                                  style={{ width: 100, height: 100 }}
                                  className="w-full "
                                  src={movie.hinhAnh}
                                  alt={movie.tenPhim}
                                />
                                <div className="ml-3">
                                  <h3>{movie.tenPhim}</h3>
                                  <p>{cinema.diaChi}</p>
                                </div>

                                {/* Load lich chieu phim */}
                                <div className="grid grid-cols-6 gap-4 mt-2">
                                  {movie.lstLichChieuTheoPhim
                                    
                                    .map((schedule) => {
                                      return (
                                        <NavLink
                                          className="bg-yellow-500 text-white rounded p-1 hover:text-red-500 "
                                          to={`/checkout/${schedule.maLichChieu}`}
                                          key={schedule.maLichChieu}
                                        >
                                          {moment(
                                            schedule.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                            <hr className="my-3 w-9/12" />
                          </Fragment>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default HomeMenu;
