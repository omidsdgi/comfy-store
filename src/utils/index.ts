import axios from "axios";

const productionUrl = ' https://strapi-store-server.onrender.com/api'

export const  customFetch= axios.create({
    baseURL: productionUrl,
})

export const formatPrice=(price:number):string=>{
    const dollarsAmount= new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        }).format(price / 100)
    return dollarsAmount
}