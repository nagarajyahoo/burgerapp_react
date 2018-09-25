import axios from 'axios';


const instance = axios.create({
    baseURL : 'https://myburgerproj.firebaseio.com'
});

instance.defaults.headers.post['Content-Type'] = 'Application/Json';

instance.interceptors.request.use(req => {
    return req;
}, err => {
    console.error(err);
    return Promise.reject(err);
});

instance.interceptors.response.use((res) => {
    return res;
}, err => {
    console.error(err);
    return Promise.reject(err);
});


export default instance;