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
        </section>


    );
};

export default SingleProduct;