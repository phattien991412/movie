import { createAction } from "./index";
import { actionType } from "./type";
import { userService } from "../../services/UserService";
import { TOKEN } from "../../util/config";
import { history } from "../../App";
import Swal from "sweetalert2";

export const fetchMe = () => {
  return async (dispatch) => {
    try {
      const res = await userService.fetchMe();

      dispatch(createAction(actionType.SET_ME, res.data.content));
    } catch (err) {}
  };
};
