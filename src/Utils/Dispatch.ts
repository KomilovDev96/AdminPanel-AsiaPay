import store from "../Store";

const { dispatch } = store;

// this function are useful for dispach store (instead of useDispatch)
export const setIsAuth = (payload: boolean) => {
    dispatch({ type: "auth/setIsAuth", payload });
};
export const setverification = (payload: boolean) => {
    dispatch({ type: "auth/setverification", payload });
};

export const setIsNetworkErr = (payload: boolean) => {
    dispatch({ type: "auth/setIsNetworkErr", payload });
};
