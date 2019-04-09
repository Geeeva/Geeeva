import axios from 'axios';

const instance = axios.create({
	baseURL: "https://geeeva-form.firebaseio.com"
});

export default instance;