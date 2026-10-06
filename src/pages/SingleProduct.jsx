import {customFetch} from "../utils/index.jsx";

export  const loader= async ({params})=>{
    const response = await customFetch(`/products/${params.id}`)

    return {product: response.data.data}
}
const SingleProduct = () => {
    return (
        <h1 className="text-4xl">
            SingleProduct
        </h1>
    );
};

export default SingleProduct;