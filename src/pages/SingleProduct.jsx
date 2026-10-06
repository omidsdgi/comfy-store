import {customFetch, formatPrice} from "../utils/index.jsx";
import {useLoaderData} from "react-router-dom";

export  const loader= async ({params})=>{
    const response = await customFetch(`/products/${params.id}`)

    return {product: response.data.data}
}
const SingleProduct = () => {
    const {product}=useLoaderData()
    console.log(product)
    const {image,title , price, company, description, colors} = product.attributes;
    const dollarsAmount= formatPrice(price)
    return(
       
        <h1 className="text-4xl">
            SingleProduct
        </h1>
    );
};

export default SingleProduct;