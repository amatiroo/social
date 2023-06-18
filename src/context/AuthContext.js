import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"646e66ccf4783e22b092e243",
        username:"Oswald",
        email:"Oswald@gmail.com",
        profilePicture:"person/1.jpeg",
        followers:["646e5988a5b00ab1e7afdf28"],
        followings:["646e5988a5b00ab1e7afdf28"],
        isAdmin:false,
    },
    isFetching: false,
    error:false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
            >
            {children}
    </AuthContext.Provider>
    )
}