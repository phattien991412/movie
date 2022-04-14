import { createAction } from "./index";
import { actionType } from "./type";
import { authService } from "../../services/AuthService";
import { TOKEN } from "../../util/config";
import { history } from "../../App";
import Swal from "sweetalert2";

export const signIn = (userInfo, callback) => {
  return async (dispatch) => {
    try {
      const res = await authService.signIn(userInfo);
      console.log({res})
      localStorage.setItem(TOKEN, res.data.accessToken);
      setTimeout(() => {
        dispatch(createAction(actionType.SET_SIGN_IN, true));
        dispatch(createAction(actionType.SET_ME, res.data));
      }, 500);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in success",
        showConfirmButton: false,
        timer: 1200
      });

      setTimeout(() => {
        history.push("/");
      }, 1500);

      if(callback) {
        callback()
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is not correct"
      });
    }
  };
};

export const signOut = (callback) => {
  return (dispatch) => {
    localStorage.removeItem(TOKEN);

    dispatch(createAction(actionType.SET_SIGN_OUT, null));
    if (callback) {
      callback();
    }
  };
};

export const registerForm = (data, callback) => {
  return async (dispatch) => {
    try {
      await authService.register(data);

      setTimeout(() => {
        dispatch(createAction(actionType.SET_REGISTER, true));
      }, 400);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign up success",
        showConfirmButton: false,
        timer: 1200
      });

      setTimeout(() => {
        history.push("/login");
      }, 1200);

      if (callback) {
        callback();
      }
    } catch (err) {
      if(err.response.data === "Tài khoản đã tồn tại!") {
        Swal.fire({
          icon: "error",
          title: "Username already exists!"
        });
        
      } else if (err.response.data === "Email đã tồn tại!") {
        Swal.fire({
          icon: "error",
          title: "Email already exists!"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Please check your information again!"
        });
      }
     
    }
  };
};
