import axios from "axios";

const instance = axios.create({
    baseURL : `https://jsonplaceholder.typicode.com/posts`
})

// instance.interceptors.request.use((config) => {
// console.log(config);
// if (config.url !== "/login"){
//     config.method = "POST"
// }
// })


export default instance;