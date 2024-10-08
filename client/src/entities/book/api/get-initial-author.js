import axios from '@/shared/lib/axios';

export const getInitialAuthor = async (id) => {
    const { data } = await axios.get(`/authors/${id}`);
    return data;
};