import apiClient from "./intance";

export const getAllPost = () =>{
    const response = apiClient.get("posts");

    return response;
};