import {Filters, PaginationContainer, ProductionsContainer} from "../components";
import {customFetch} from "../utils/index.jsx";

const url = '/products'
export const loader = async ({request})=>{
    const response = await customFetch(url)
    const products = await response.data.data
    const meta = response.data.meta
    return {products, meta}
}
const Products = () => {

    return (
        <>
            <Filters/>
            <ProductionsContainer/>
            <PaginationContainer/>
        </>
    );
};

export default Products;