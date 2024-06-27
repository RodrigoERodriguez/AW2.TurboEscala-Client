import axios from 'axios';

const authService = {
    async authUser(action, email, password, firstName = '', lastName = '') {
        try {
            const response = await axios.post('http://localhost:5000/api/auth', {
                action,
                email,
                password,
                firstName,
                lastName
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error en la autenticación: ${error.message}`);
        }
    },
};

export default authService;