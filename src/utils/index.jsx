import axios from "axios";

const productionUrL='https://strapi-store-server.onrender.com/api'

export const customFetch= axios.create({
    baseURL:productionUrL,
})

export const formatPrice=(price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2));
}