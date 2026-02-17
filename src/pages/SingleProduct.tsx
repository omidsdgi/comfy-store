import {customFetch, formatPrice} from "../utils";
import {Link, type LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import React, {useState} from "react";

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
        ...productData.attributes,
        price:Number(productData.attributes.price)
    }
    return {singleProduct};
}

const SingleProduct = () => {
const{singleProduct}=useLoaderData() as {singleProduct:ProductProps};
const {image, title,price, description, colors, company} = singleProduct;
const dollarsAmount=formatPrice(price)
const [productColor, setProductColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const handleAmount=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setAmount(parseInt(e.target.value))
    }

    return (
        <section>
            <div className="text-md breadcrumbs">
                <ul>
                    <li>
                        <Link to='/'  className="hover:text-primary">Home</Link>
                    </li>
                    <li>
                        <Link to='/products'  className="hover:text-primary">Products</Link>
                    </li>
                </ul>
            </div>
            {/*PRODUCT*/}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/*IMAGE*/}
                <img
                    src={image}
                    alt={title}
                    className=" h-96 w-96 object-cover rounded-lg lg:rounded-lg lg:w-full"
                />
                {/*PRODUCT*/}
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='mt-3 text-xl'>{dollarsAmount}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                  {/*COLORS*/}
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'> colors</h4>
                        <div className='mt-2'>
                            {colors.map((color) => {
                                return <button key={color}
                                type="button"
                                className={`badge w-6 h-6 mr-2 ${color ===productColor && 'border-3 border-secondary'}`}
                                  style={{backgroundColor: color}}
                                  onClick={() => {setProductColor(color)}}
                                ></button>
                            })}
                        </div>
                    </div>
                    {/*AMOUNT*/}
                    <div className='form-control w-full max-w-xs'>
                        <label className='label' htmlFor='amount'>
                            <h4 className='text-md font-medium tracking-wider capitalize'> {amount}</h4>
                        </label>
                        <select className="select select-bordered select-secondary select-md" id="amount" value={amount} onChange={handleAmount} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="mt-10">
                        <button className='btn btn-secondary btn-md' onClick={()=>console.log('add to bag')}>
                            Add to bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;