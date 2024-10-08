import axios from "@/shared/lib/axios";

export const getBooks = async(page) => {
    const { data } = await axios.get(`/books?page=${page}`);
    return data;
};