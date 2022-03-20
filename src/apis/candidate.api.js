import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/candidate/api';

export default class Candidate {
    static async resgister(candidateBody) {
        try {
            const res = await axios.post(`${url}/register`, candidateBody);
            return res.data;
        } catch (error) {
             return {
                 error: true,
                 message: 'Lỗi đường truyền!'
             };
        }
    }

    static async logOut(candidateBody) {
        try {
            const res = await axios.get(`${url}/log-out`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token_candidate')}`
                }
            });
            return res.data;
        } catch (error) {
            return {
                error: true,
                message: 'Lỗi đường truyền!'
            };
        }
    }

    static async login(candidateBody) {
        try {
            const res = await axios.post(`${url}/login`, candidateBody);
            return res.data;
        } catch (error) {
            return {
                error: true,
                message: 'Sai tài khoản hoặc mật khẩu, vui lòng khử lại!'
            };
        }
    }

    static async secret() {
        try {
            const res = await axios.get(`${url}/secret`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token_candidate')}`
                }
            });
            return res.data;
        } catch (error) {
            return null;
        }
    }
}