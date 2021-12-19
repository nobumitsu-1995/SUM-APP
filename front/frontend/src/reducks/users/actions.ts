import { userState } from "./type";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            icon: userState.icon,
            uid: userState.uid,
            username: userState.username,
            email: userState.email
        }
    }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            icon: "",
            uid: "",
            username: "",
            email: ""
        }
    }
};