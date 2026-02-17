import {customFetch, formatPrice} from "../utils";
import {Link, type LoaderFunctionArgs, useLoaderData} from "react-router-dom";

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
    const productData = response.data.data;
    const singleProduct={
        id:productData.id,
        ...productData,
        price:Number(productData.attributes.price)
    }
    return {singleProduct};
}

const SingleProduct = () => {
const{singleProduct}=useLoaderData() as {singleProduct:ProductProps};
const {image, title,price, description, colors, company} = singleProduct;
const dollarsAmount=formatPrice(price)
    return (
        <section>
            <div className="text-md breadcrumbs">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            {/*PRODUCT*/}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/*IMAGE*/}
                <img
                    src={image}
                    alt={title}
                    className=" h-96 w-96 object-cover rounded-lg lg:rounded-lg:w-full"
                />
                {/*PRODUCT*/}
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='mt-3 text-xl'>{dollarsAmount}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                    <p>{colors}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;