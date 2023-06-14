import { createContext, useReducer } from "react";


const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error:flase,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () =>{
    const [state,dispatch] = useReducer(AuthContext,INITIAL_STATE);

    return (
        <AuthContextProvider value={{user:state.user, isFetching:state.isFetching, error:state.error}}>

        </AuthContextProvider>
    )
}