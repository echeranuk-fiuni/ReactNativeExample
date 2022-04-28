import { useState, useContext } from "react";
import SessionContext from "../contexts/sessionContext";
import axiosClient from "./axiosClient";

export const useCallEndpoint = (method, url) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const { sessionToken, setSessionToken, setValidationError } = useContext(SessionContext);

    console.log('call token', sessionToken);

    const call = (params) => {
        setData(undefined);
        setError(undefined);
        setLoading(true);
        return axiosClient({
            method,
            url: url.replace(':id', params?.id),
            data: params?.body,
            headers: sessionToken ? { 'Authorization': sessionToken } : undefined,
        })
        .then(response => {
            if (method === 'delete' && url === '/sessions') {
                // Invalidate token on logout
                setSessionToken(undefined);
            }
            setData(response.data);
            console.log('Respuesta', response);
        })
        .catch(error => {
            setError(error?.response?.data?.message || error?.message);
            if (error?.response?.status === 401) {
                setSessionToken(undefined);
            }
            if (error?.response?.status === 400) {
                setValidationError(error?.response?.data?.message);
            }
            console.log('Error', {...error});
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return {
        call,
        data,
        error,
        loading,
    }
};