import {customFetch, formatPrice} from "../utils";
import {type LoaderFunctionArgs, useLoaderData} from "react-router-dom";

interface ProductProps {
    productId: number;
    title: string;
    price: number;
    image: string;
    description: string;
    colors:string[];
    company: string;
}

export const loader= async ({params}:LoaderFunctionArgs)=>{
    const response=await customFetch(`/products/${params.id}`);
    const singleProduct= response.data.data.attributes;
    return {singleProduct};
}

const SingleProduct = () => {
const{singleProduct}=useLoaderData() as {singleProduct:ProductProps[]};
const {image, title,price, description, colors, company} = singleProduct;
const dollarsAmount=formatPrice(price)
    return (
        <h1 className="text-4xl">
            SingleProduct
        </h1>
    );
};

export default SingleProduct;