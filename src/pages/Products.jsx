import {Filters, PaginationContainer, ProductionsContainer} from "../components";

export const loader = async ({request})=>{
    return null
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