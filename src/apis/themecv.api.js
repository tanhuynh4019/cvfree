import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/admin/api/theme_cv';

export default class ThemCv {
    static async getAllThemeCv(role) {
        const res = await axios.get(`${url}?role=${role}`);
        console.log(res.data);
        return res.data;
    }
}