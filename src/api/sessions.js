import { useCallEndpoint } from "./utils";

export const useLogin = () => {
    return useCallEndpoint('post', '/sessions');
};

export const useLogout = () => {
    return useCallEndpoint('delete', '/sessions');
};