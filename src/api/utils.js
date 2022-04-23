import { useState, useContext } from "react";
import SessionContext from "../contexts/sessionContext";
import axiosClient from "./axiosClient";

export const useCallEndpoint = (method, url) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const { sessionToken } = useContext(SessionContext);

    console.log('call token', sessionToken);

    const call = (params) => {
        setData(undefined);
        setError(undefined);
        setLoading(true);
        axiosClient({
            method,
            url: url.replace(':id', params?.id),
            data: params?.body,
            headers: sessionToken ? { 'Authorization': sessionToken } : undefined,
        })
        .then(response => {
            setData(response.data);
            console.log('Respuesta', response);
        })
        .catch(error => {
            setError(error?.response?.data?.message || error?.message);
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