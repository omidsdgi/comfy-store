import {customFetch, formatPrice, generateAmountOptions} from "../utils";
import {Link, useLoaderData} from "react-router-dom";
import {useState} from "react";

export  const loader= async ({params})=>{
    const response = await customFetch(`/products/${params.id}`)

    return {product: response.data.data}
}
const SingleProduct = () => {
    const {product}=useLoaderData()
    console.log(product)
    const {image,title , price, company, description, colors} = product.attributes;
    const [productColor, setProductColor] = useState(colors[0])
    const [amount   , setAmount   ] = useState(1)

    const handleAmount=(e)=>{
        setAmount(parseInt(e.target.value));
    }
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
            {/*Product Info*/}
            <div>
                <h1 className="capitalize text-3xl font-bold">{title}</h1>
                <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                <p className="mt-3 text-xl">{dollarsAmount}</p>
                <p className="mt-6 leading-8">{description}</p>
                {/*Colors*/}
                <div className="mt-6">
                    <h4 className="text-md font-medium tracking-wider capitalize">Colors</h4>
                    <div className="mt-2">
                        {colors.map(color=>{
                            return (
                                <button
                                    key={color}
                                    type='button'
                                    className={`badge h-6 w-6 mr-2 ${color ===productColor && 'border-2 border-secondary'}`}
                                    style={{backgroundColor: color}}
                                    onClick={()=>setProductColor(color)}
                                >

                                </button>
                            )

                        })}
                    </div>
                </div>
                {/*Amount*/}
                <div className="form-control w-full max-w-xs">
                    <label htmlFor="amount" className='label'>
                        <h4 className="text-md font-medium tracking-wider capitalize">Amount
                            amount
                        </h4>
                    </label>
                    <select
                        id="amount"
                        className='select select-secondary select-bordered select-md'
                        value={amount}
                        onChange={handleAmount}>
                        {generateAmountOptions(20)}
                    </select>
                </div>
                {/*Cart Btn*/}
                <div className="mt-10">
                <button
                    className="btn btn-secondary btn-md"
                    onClick={()=>console.log('add to bag')}
                >
                    Add to bag
                </button>
                </div>
            </div>
            </div>
        </section>


    );
};

export default SingleProduct;