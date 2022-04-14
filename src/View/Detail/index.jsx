import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import cirle from "../../assets/style/circle.css";
const { TabPane } = Tabs;
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieSchedule } from "../../store/action/cinema";
import moment from "moment";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ReactPlayer } from "react-player";
import "./index.css";

const Detail = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.cinema.movieSchedule);
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchMovieSchedule(id));
  }, []);

  const [state] = useState({
    tabPosition: "left"
  });
  const { tabPosition } = state;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="detail"
      style={{
        backgroundImage: `url(${schedule.hinhAnh})`,
        
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <CustomCard
        className="card xl:container"
        effectColor="#cecece" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={-1} // default border radius value is 10px
      >
        <div className="lg:grid lg:grid-cols-12 block">
          <div className="xl:col-start-4 lg:col-span-4 lg:col-start-3 lg:mb-0 mb-12">
            <div className="grid grid-cols-2 ">
              <img
                className="block lg:w-4/5"
                src={schedule.hinhAnh}
                alt="movie"
              />
              <div className="my-auto text-white lg:ml-0 ml-10">
                <p className="text-base">
                  Ngày chiếu:{" "}
                  {moment(schedule.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-xl ">{schedule.tenPhim}</p>
              </div>
            </div>
          </div>
          <div className="lg:my-auto col-span-2 col-end-11">
            <div className={`c100 p${schedule.danhGia * 10} `}>
              <span>{schedule.danhGia * 10}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div className="ml-4 my-auto lg:pt-0 pt-14">
              <Rate allowHalf value={schedule.danhGia / 2} />
            </div>
          </div>
        </div>

        {/* Tabs lich chieu phim */}
        <div className="detail-schedule lg:container lg:grid grid-cols-12 lg:mt-28 block">
          <div className="xl:col-start-3 xl:col-span-8 lg:col-span-10 lg:col-start-2 bg-white lg:mt-0 mt-32">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch chiếu" key="1">
                <Tabs tabPosition={tabPosition}>
                  {schedule.heThongRapChieu?.map((item, index) => {
                    return (
                      <TabPane
                        tab={
                          <img
                            loading="lazy"
                            className="rounded-full"
                            width="50"
                            src={item.logo}
                            alt="logo"
                          />
                        }
                        key={index}
                      >
                        {/* Load hệ thống rạp */}
                        {item.cumRapChieu?.map((cinema, index) => {
                          return (
                            <div key={index}>
                              <div className="flex flex-row ">
                                <div className="lg:w-1/12 w-1/12 my-auto">
                                  <img
                                    loading="lazy"
                                    src={item.logo}
                                    alt="cinema"
                                    className="w-full"
                                  />
                                </div>
                                <div className="ml-4 mt-1">
                                  <p
                                    style={{ fontSize: 18 }}
                                    className="mb-2 font-semibold"
                                  >
                                    {cinema.tenCumRap}
                                  </p>
                                  <p className="text-gray-400">
                                    {cinema.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="grid lg:grid-cols-4 grid-cols-2 mt-6">
                                {cinema.lichChieuPhim
                                  .splice(0, 8)
                                  ?.map((movie) => {
                                    return (
                                      <div
                                        key={movie.maLichChieu}
                                        className="col-span-1 mb-6"
                                      >
                                        <NavLink
                                          to={`/checkout/${movie.maLichChieu}`}
                                          className="bg-yellow-500 rounded p-2  text-white hover:text-red-500"
                                        >
                                          {moment(
                                            movie.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
              <TabPane tab="Thông tin" key="2">
                <div className="lg:grid grid-cols-4 block">
                  <div className="lg:block hidden col-span-1 lg:w-full my-auto">
                    <img
                      src={schedule.hinhAnh}
                      className="w-full lg:ml-10 lg:mb-10"
                      alt=""
                    />
                  </div>
                  <div className="col-span-3 lg:px-16 px-6 lg:pb-0 pb-6 my-auto">
                    <h1 className="text-lg">Nội dung phim</h1>
                    <p className="lg:text-base text-sm py-3">{schedule.moTa}</p>
                    <div>
                      <button
                        onClick={onOpenModal}
                        className="px-4 py-1 border-2 border-yellow-500 bg-yellow-500 font-semibold text-base hover:bg-yellow-400 hover:border-yellow-400 duration-300"
                      >
                        <a
                          className="text-white hover:text-white"
                          href={schedule.trailer}
                          target="_blank"
                        >
                          Trailer
                        </a>
                      </button>
                      {/* <Modal styles={{width: "50%"}} open={open} onClose={onCloseModal} center={true}>
                        <ReactPlayer
                          playing={true}
                          controls={true}
                          url={schedule.trailer}
                        />
                      </Modal> */}
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
