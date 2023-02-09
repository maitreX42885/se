import React, { useEffect, useState } from "react";


export const AuthContext = React.createContext();

// export function useAuthContext() {
//     return useAuthContext(AuthContext);
// }

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    function setSession(value) {
        setCurrentUser(value)
        
    };

    const setAuth = {
        currentUser,
        currentUserAction: {
            setSession
        }
    };

    return (
        <AuthContext.Provider value={setAuth}>
            { children }
        </AuthContext.Provider>
    )
}