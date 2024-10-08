import axios from '@/shared/lib/axios';

export const searchAuthors = async (author) => {
    const { data } = await axios.get(`/authors/search?search=${author}`);
    return data;
};