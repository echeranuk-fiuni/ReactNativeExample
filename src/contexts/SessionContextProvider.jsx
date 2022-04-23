import React, { useState } from 'react';
import SessionContext from './sessionContext';

const SessionContextProvider = props => {
    const [sessionToken, setSessionToken] = useState();
    const initialValue = {
        sessionToken,
        setSessionToken,
    };
    return (
        <SessionContext.Provider value={initialValue}>
            {props.children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;