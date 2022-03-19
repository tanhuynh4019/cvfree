import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/candidate/api/term';

export default class Term {
    static async getAllTermStatus(type) {
        const res = await axios.get(`${url}/${type}`);
        return res.data;
    }
}