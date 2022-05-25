import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization :"Client-ID yKKzDNkd-_MhQQM6PbGuiUyXvfTAFpd5g3O55XYsOBs",
    },
});