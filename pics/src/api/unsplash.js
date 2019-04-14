import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 381444ff1714243f570eae9ff9c315d3e55258e40fcdff5e6fedd00ca38bf347'
    }
});
