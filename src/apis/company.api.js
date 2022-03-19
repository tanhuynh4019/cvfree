import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/candidate/api/company';

export default class Company {
    static async getAllCompany(status) {
        try {
            const res = await axios.get(`${url}/${status}`);
            return res.data;
        } catch (error) {
            return {
                error: true
            };
        }
    }

    static async getBySlugCompany(slug) {
        try {
            const res = await axios.get(`${url}/details/${slug}`);
            return res.data;
        } catch (error) {
            return {
                error: true
            };
        }
    }
}