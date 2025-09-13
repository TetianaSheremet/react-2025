import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";

import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
})

axiosInstance.interceptors.request.use((request)=>{


    if (request.method?.toUpperCase()==='GET'){
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})


export const login= async ({username, password, expiresInMins}:LoginData)=>{
const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username,password,expiresInMins})
    console.log(userWithTokens)
    localStorage.setItem('user',JSON.stringify(userWithTokens))
}

export const loadAuthProducts = async ():Promise<IProduct[]> =>{
   const {data} =  await axiosInstance.get<IProductsResponseModel>('/products')
    return data.products
}

export const refresh = async ()=>{

    const IUserWithTokens = retriveLocalStorage<IUserWithTokens>('user')
    const {data:{refreshToken,accessToken}}= await axiosInstance.post<ITokenPair>('/refresh',{refreshToken : IUserWithTokens.refreshToken,expiresInMin:1})
console.log(accessToken)
    console.log(refreshToken)
    IUserWithTokens.accessToken=accessToken;
    IUserWithTokens.refreshToken=refreshToken;
    localStorage.setItem('user',JSON.stringify(IUserWithTokens))
}
