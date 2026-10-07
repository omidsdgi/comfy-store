import {customFetch, formatPrice} from "../utils/index.jsx";
import {Link, useLoaderData} from "react-router-dom";

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
            {/*Products*/}
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                {/*Image*/}
                <img
                    src={image}
                    alt={title}
                    className='w-96 h-96 object-cover rounded-lg lg:w-full'
                />
            </div>
        </section>


    );
};

export default SingleProduct;