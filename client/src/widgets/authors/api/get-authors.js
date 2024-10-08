import axios from "@/shared/lib/axios";

export const getAuthors = async(page) => {
    const { data } = await axios.get(`/authors?page=${page}`);
    return data;
};