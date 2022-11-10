import { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthContextProvider({children}) {
const [state,setState]=useState({
    isAuth:false,
    token:null,
});

const userlogin=(token)=>{
    setState({
        ...state,
        isAuth:true,
        token,
    });
}
const userLogout=()=>{
    setState({
        ...state,
        isAuth:false,
        token:null,
    })
}
return (
    <AuthContext.Provider value={{authState:state,userlogin,userLogout}}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthContextProvider;