import { baseService } from "./baseService";
import { GROUPID } from "../util/config";
import * as yup from "yup";

// Validation form
export const registerUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Username is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  soDt: yup
    .string()
    .required("Phone is requied")
    .matches(/^[0-9]+$/g, "Phone must be number"),
  matKhau: yup
    .string()
    .required("Password is required")
    .min(6, "Passwords must be at least 6 characters long."),
  hoTen: yup.string().required("Fullname is required")
});

export const signInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Username is required"),
  matKhau: yup
    .string()
    .required("Password is required")
    .min(6, "Passwords must be at least 6 characters long.")
});

export class AuthService extends baseService {
  constructor() {
    super();
  }

  signIn = (userInfo) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, userInfo);
  };

  register = (data) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, data);
  };
}

export const authService = new AuthService();
