import React, { useState } from 'react';
import SessionContext from './sessionContext';

const SessionContextProvider = props => {
    const [sessionToken, setSessionToken] = useState();
    const [validationError, setValidationError] = useState();
    const initialValue = {
        sessionToken,
        setSessionToken,
        validationError,
        setValidationError,
    };
    return (
        <SessionContext.Provider value={initialValue}>
            {props.children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;