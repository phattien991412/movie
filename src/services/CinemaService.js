import { GROUPID } from "../util/config";
import { baseService } from "./baseService";

export class CinemaService extends baseService {
  constructor() {
    super();
  }

  fetchCinema = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  fetchCinemaAddress = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };

  fetchMovieDetail = () => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?maNhom=${GROUPID}`)
  }

  fetchMovieSchedule = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }

  fetchCinemaDetail = (maLichChieu) => {
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
  }

}

export const cinemaService = new CinemaService();
