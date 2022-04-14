import { baseService } from "./baseService";
import { GROUPID } from "../util/config";

export class MovieServices extends baseService {
  constructor() {
    super();
  }

  fetchBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };

  fetchMovies = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  
}

export const movieService = new MovieServices();
