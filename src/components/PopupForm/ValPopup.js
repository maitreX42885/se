import React, { useState } from "react";

export const ValPopupContext = React.createContext();

export const ValPopupProvider = ({ children }) => {
    const [ValPopup, setValPopup] = useState(0);

    function setVal(value) {
        setValPopup(value)
    };

    const setValC = {
        ValPopup,
        ValPopupAction: {
            setVal
        }
    };

    return (
        <ValPopupContext.Provider value={setValC}>
            { children }
        </ValPopupContext.Provider>
    )
}