
import React, { useState } from "react";

export const PagecursorContext = React.createContext();

export const PageCursorProvider = ({ children }) => {
    const [PageCursor, setPageCursor] = useState(0);

    function setPage(value) {
        setPageCursor(value)
    };

    const setPageC = {
        PageCursor,
        PageCursorAction: {
            setPage
        }
    };

    return (
        <PagecursorContext.Provider value={setPageC}>
            { children }
        </PagecursorContext.Provider>
    )
}