import axios from 'axios';

export const fetchTaskInfo = async (taskName) => {
    try {
        const response = await axios.get(`YOUR_API_ENDPOINT/${taskName}`);
        return response.data.info;
    } catch (error) {
        console.error('Error fetching task info', error);
        return null;
    }
};
