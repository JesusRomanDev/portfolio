import { useState, createContext, Children } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [normal, useNormal] = useState({usuario: 'Jesus'})
    return (
        <AuthContext.Provider value={normal}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;