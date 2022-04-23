import { useCallEndpoint } from "./utils";

export const useLogin = () => {
    return useCallEndpoint('post', '/sessions');
};