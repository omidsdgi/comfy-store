import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import {useLoaderData} from "react-router-dom";

const PaginationContainer = () => {
    const { meta } = useLoaderData()
    const totalProducts = meta.pagination.total
    return (
        <>
            {/*HEADER*/}
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className="font-medium textarea-md">
                    {totalProducts} product {totalProducts>1 && 's'}
                </h4>
            </div>
            <ProductsList />
            <ProductsGrid/>
        </>
    );
};

export default PaginationContainer;