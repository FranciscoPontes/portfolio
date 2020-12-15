import axios from 'axios';

const url = axios.create({
    baseURL: 'https://portfolio-e3314.firebaseio.com/'
});

export default url;