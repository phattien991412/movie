import { baseService } from "./baseService";
import { GROUPID } from "../util/config";

export class UserService extends baseService {
  constructor() {
    super();
  }

  fetchMe = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}

export const userService = new UserService();
