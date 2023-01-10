import { AnyAction } from "redux";
// import { USER_ACTION_TYPES } from "./user.type";
import {
  signInSuccess,
  signOutFaild,
  signInFailure,
  signUpFaild,
  signOutSuccess,
} from "./user.action";
import { UserData } from "../../utils/Firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signInFailure.match(
      action || signOutFaild.match(action) || signUpFaild.match(action)
    )
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
