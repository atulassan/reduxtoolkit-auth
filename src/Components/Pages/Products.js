import React, {useEffect, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Store/Features/Shop/productsActions";
import Product from "../Module/Product";


function Products() {
    
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state=> state.shop);
    useEffect(()=> {
        dispatch(getProducts());
    }, []);

    if(status === 'loading') {
        return (
            <div>Loading...</div>
        )    
    }

    return(
        <>
            <ul>
                { status === 'idle' &&
                    products.map((product, index) => (
                        <Fragment key={index}>
                            <Product product={product} index={index} />
                        </Fragment>
                    ))
                }
            </ul>
        </>
    )
    
}

export default Products;    