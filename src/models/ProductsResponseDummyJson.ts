import {ProductModel} from "./ProductModel.ts";

export interface ProductsResponseDummyJson {
    products:ProductModel[],
    total: number,
    skip: number,
    limit:number
}