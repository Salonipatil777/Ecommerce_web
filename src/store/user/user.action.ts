import { USER_ACTION_TYPES } from "./user.type";
import { User } from "firebase/auth";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/Reducer.utils";
import {
  UserData,
  AdditionalInformation,
} from "../../utils/Firebase/firebase.utils";

export type CheckUserSection = Action<USER_ACTION_TYPES.CHECK_USER_SECTION>;
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type signUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;
export type SignInFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILURE,
  Error
>;
export type signUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;
export type SignOutFaild = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILD,
  Error
>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignUpFaild = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILD,
  Error
>;

export const checkUserSection = withMatcher(
  (): CheckUserSection => createAction(USER_ACTION_TYPES.CHECK_USER_SECTION)
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData  & {id:string}): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailure = withMatcher(
  (error: Error): SignInFailure =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)
);

export const SignUpStart = withMatcher(
  (email: string, password: string, displayName: string): signUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);
export const SignUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): signUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFaild = withMatcher(
  (error: Error): SignUpFaild =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILD, error)
);
export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);
export const signOutFaild = withMatcher(
  (error: Error): SignOutFaild =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILD, error)
);
