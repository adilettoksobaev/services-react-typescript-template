import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { appActions } from "../store/app/app.slice";

const actions = {
  ...appActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
