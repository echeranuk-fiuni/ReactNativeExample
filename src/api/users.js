import { useCallEndpoint } from "./utils";

export const useListUsers = () => {
    return useCallEndpoint('get', '/users');
};

export const useCreateUser = () => {
    return useCallEndpoint('post', '/users');
};

export const useDeleteUser = () => {
    return useCallEndpoint('delete', '/users/:id');
};

export const useUpdateUser = () => {
    return useCallEndpoint('put', '/users/:id');
};

export const useGetUser = () => {
    return useCallEndpoint('get', '/users/:id');
}