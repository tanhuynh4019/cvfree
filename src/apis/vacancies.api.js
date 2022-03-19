import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/candidate/api/vacancies';

export default class Vacancies {
    static async getAllVacancies() {
        const res = await axios.get(`${url}`);
        return res.data;
    }
}