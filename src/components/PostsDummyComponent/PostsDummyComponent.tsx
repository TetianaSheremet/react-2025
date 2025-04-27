import {useEffect, useState} from "react";
import {IPostDummy} from "../../models/IPostDummy.ts";
import {BaseDummyModel} from "../../models/BaseDummyModel.ts";
import {getAll} from "../../services/general.api.service.ts";
import {PostDummyComponent} from "./PostDummyComponent.tsx";


type PostsResponse = {
    posts: IPostDummy[];
} & BaseDummyModel;



export const PostsDummyComponent = () => {


   

    const[posts,setPosts ] = useState<IPostDummy[]>([])

    useEffect(()=>{
        getAll<PostsResponse>("dummy","posts").then(({posts})=>setPosts(posts))

    },[])



    return (
        <div>{
            posts.map((post)=><PostDummyComponent post={post}/>)
        }</div>
    );
};