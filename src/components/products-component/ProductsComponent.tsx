import {useEffect, useState} from "react";
import {ProductModel} from "../../models/ProductModel.ts";
import {loadProducts} from "../../service/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {

    const[products, setProducts] = useState<ProductModel[]>([])


    useEffect(() => {
        loadProducts().then(products=>setProducts(products))
    }, []);



    return (
        <div>{products.map((product)=><ProductComponent product={product} key={product.id}/>)}</div>
    );
};