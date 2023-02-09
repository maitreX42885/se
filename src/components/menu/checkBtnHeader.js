import React, { useEffect, useState } from "react";


export const HeaderContext = React.createContext();

// export function useAuthContext() {
//     return useAuthContext(AuthContext);
// }

export const HeaderProvider = ({ children }) => {

    const [btnHeaderMobile, setbtnHeaderMobile] = useState(0);

    function setBtn(value) {
        setbtnHeaderMobile(value)
    };

    const setHeaderMobile = {
        btnHeaderMobile,
        btnMobileAction: {
            setBtn
        }
    };

    return (
        <HeaderContext.Provider value={setHeaderMobile}>
            { children }
        </HeaderContext.Provider>
    )
}