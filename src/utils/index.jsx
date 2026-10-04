import axios from "axios";

const productionUrL='https://strapi-store-server.onrender.com/api'

export const customFetch= axios.create({
    baseURL:productionUrL,
})