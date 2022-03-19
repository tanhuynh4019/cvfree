import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/candidate/api/job';

export default class Job {
    static async getAllJobStatus(status) {
        const res = await axios.get(`${url}/${status}`);
        return res.data;
    }
}