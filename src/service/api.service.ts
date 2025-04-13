import {ProductsResponseDummyJson} from "../models/ProductsResponseDummyJson.ts";


const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products'


const loadProducts= async ()=>{

   const response : ProductsResponseDummyJson = await fetch(endpointProducts).then(value => value.json())

   return response.products

}


export{loadProducts}

