interface Urls{
    dummy:string,
    json:string
}

const Base_Urls:Urls ={
    dummy: import.meta.env.VITE_BASEDUMMY_URL,
    json:import.meta.env.VITE_BASEJSON_URL,
}


export const getAll= async <T,> (url: keyof Urls, endpoint: string):Promise<T>=>{
    const baseUrl = Base_Urls[url];

    let finalUrl= '';

    if(url==='dummy'){
        finalUrl=`${baseUrl}/${endpoint}?limit=0`
    }

    else{
        finalUrl=`${baseUrl}/${endpoint}`
    }

    return await fetch(finalUrl).then(res=>res.json());
}